using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web.Script.Serialization;

namespace instacollect.Utils
{
    public class Geo
    {
        private static string cacheDir = @"d:\temp\cache";
        private static bool cacheActive = true;
        public static List<Step> PasosRuta(Location origen, Location destino, int tamañopaso)
        {
            string sOrigen = origen.Latitude.ToString(CultureInfo.InvariantCulture) + "," +
                origen.Longitude.ToString(CultureInfo.InvariantCulture);
            string sDestino = destino.Latitude.ToString(CultureInfo.InvariantCulture) + "," +
                              destino.Longitude.ToString(CultureInfo.InvariantCulture);
            var distanciaADestino = Distancia(origen, destino);
            // si es menor de 50 metros ruta directa
            if (distanciaADestino < 50)
            {
                var puntos = new List<Location> { origen, destino };
                return (AjustarPasos(tamañopaso, puntos));
            }
            return PasosRuta(sOrigen, sDestino, tamañopaso);
        }
        public static List<Step> PasosRuta(string origen, string destino, int tamañopaso)
        {
            var puntos = GetDirections(origen, destino);

            return (AjustarPasos(tamañopaso, puntos));
        }
        private static List<Step> AjustarPasos(int tamañopaso, List<Location> puntos)
        {
            var caminonuevo = new List<Step>();
            // recalcular rutas para ajustarlas a un paso regular del tamaño indicado
            if (puntos == null)
                return caminonuevo;
            for (var i = 0; i < puntos.Count - 1; i++)
            {
                var inici = puntos[i];
                var seguent = puntos[i + 1];
                var distancia = Distancia(inici, seguent);
                var puntoActual = inici;
                if (distancia > tamañopaso)
                {
                    var numPasos = 0;
                    while (true)
                    {
                        numPasos++;
                        var direcciongrados = Bearing(seguent, puntoActual);
                        var puntoIntermedio = BuscaPunto(puntoActual, direcciongrados, -tamañopaso);
                        var metrosQuedan = Distancia(puntoIntermedio, seguent);
                        if (metrosQuedan < tamañopaso)
                        {
                            caminonuevo.Add(new Step()
                            {
                                Origin = puntoActual,
                                Destination = seguent,
                                Distance = Distancia(puntoActual, seguent)
                            });
                            break;
                        }
                        caminonuevo.Add(new Step()
                        {
                            Origin = puntoActual,
                            Destination = puntoIntermedio,
                            Distance = Distancia(puntoActual, puntoIntermedio)
                        });
                        puntoActual = puntoIntermedio;
                    }
                }
                else
                {
                    if (distancia > 0)
                    {
                        caminonuevo.Add(new Step() { Origin = puntoActual, Destination = seguent, Distance = distancia });
                    }
                }
            }
            return caminonuevo;
        }
        public static List<Location> GetDirections(String origen, String destino)
        {
            // otros parametros &region=es
            // units=metric
            var address = String.Format("http://maps.google.com/maps/api/directions/json?origin={0}&destination={1}&mode=walking&sensor=false", origen.Replace(" ", "+"), destino.Replace(" ", "+"));
            string result = "";
            if (Geo.cacheActive)
            {
                var fname = CleanFileName(address);
                if (!System.IO.Directory.Exists(Geo.cacheDir))
                {
                    System.IO.Directory.CreateDirectory(Geo.cacheDir);
                }

                string fullname = Path.Combine(Geo.cacheDir, fname);
                if (System.IO.File.Exists(fullname))
                {
                    result = File.ReadAllText(fullname);
                }
                else
                {
                    result = new System.Net.WebClient().DownloadString(address);
                    File.WriteAllText(fullname, result);
                }
            }
            else
            {
                result = new System.Net.WebClient().DownloadString(address);
            }
            var jss = new JavaScriptSerializer();
            var camino = jss.Deserialize<dynamic>(result);
            if (camino["status"] == "OK")
            {
                var ruta = camino["routes"][0];
                var todoslospuntos = new List<Location>();
                var legs = ruta["legs"][0];
                var pasos = legs["steps"];

                foreach (var step in pasos)
                {
                    // convertir en lista de lat lng
                    var puntoscodificados = step["polyline"]["points"];
                    var puntos = DecodePolylinePoints(puntoscodificados);
                    todoslospuntos.AddRange(puntos);
                }
                return todoslospuntos;
            }
            return null;
        }
        private static List<Location> DecodePolylinePoints(string encodedPoints)
        {
            if (encodedPoints == null || encodedPoints == "") return null;
            List<Location> poly = new List<Location>();
            char[] polylinechars = encodedPoints.ToCharArray();
            int index = 0;

            int currentLat = 0;
            int currentLng = 0;
            int next5bits;
            int sum;
            int shifter;

            try
            {
                while (index < polylinechars.Length)
                {
                    // calculate next latitude
                    sum = 0;
                    shifter = 0;
                    do
                    {
                        next5bits = (int)polylinechars[index++] - 63;
                        sum |= (next5bits & 31) << shifter;
                        shifter += 5;
                    } while (next5bits >= 32 && index < polylinechars.Length);

                    if (index >= polylinechars.Length)
                        break;

                    currentLat += (sum & 1) == 1 ? ~(sum >> 1) : (sum >> 1);

                    //calculate next longitude
                    sum = 0;
                    shifter = 0;
                    do
                    {
                        next5bits = (int)polylinechars[index++] - 63;
                        sum |= (next5bits & 31) << shifter;
                        shifter += 5;
                    } while (next5bits >= 32 && index < polylinechars.Length);

                    if (index >= polylinechars.Length && next5bits >= 32)
                        break;

                    currentLng += (sum & 1) == 1 ? ~(sum >> 1) : (sum >> 1);
                    Location p = new Location();
                    p.Latitude = Convert.ToDouble(currentLat) / 100000.0;
                    p.Longitude = Convert.ToDouble(currentLng) / 100000.0;
                    poly.Add(p);
                }
            }
            catch (Exception ex)
            {
                // logo it
            }
            return poly;
        }
        public class Location
        {
            public Location()
            {

            }
            public Location(double latitude, double longitude)
            {
                this.Latitude = latitude;
                this.Longitude = longitude;
            }
            public Location(string latitude, string longitude)
            {
               this.Latitude=Convert.ToDouble(latitude.Replace(".",","));
               this.Longitude = Convert.ToDouble(longitude.Replace(".", ","));
            }
            public Double Latitude { get; set; }
            public Double Longitude { get; set; }
        }
        public class Step
        {
            public Location Origin { get; set; }
            public Location Destination { get; set; }
            public Double Distance { get; set; }
        }
        public static double Distancia(Location startPoint, Location endPoint)
        {
            return (Distancia(startPoint.Latitude, startPoint.Longitude, endPoint.Latitude, endPoint.Longitude, 'K'));
        }
        private static double Distancia(double lat1, double lon1, double lat2, double lon2, char unit)
        {
            double theta = lon1 - lon2;
            double dist = Math.Sin(Deg2Rad(lat1)) * Math.Sin(Deg2Rad(lat2)) + Math.Cos(Deg2Rad(lat1)) * Math.Cos(Deg2Rad(lat2)) * Math.Cos(Deg2Rad(theta));
            dist = Math.Acos(dist);
            dist = Rad2Deg(dist);
            dist = dist * 60 * 1.1515;
            if (unit == 'K')
            {
                dist = dist * 1.609344;
            }
            else if (unit == 'N')
            {
                dist = dist * 0.8684;
            }
            return (Math.Round(dist * 1000, 0));
        }
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        //::  This function converts decimal degrees to radians             :::
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        private static double Deg2Rad(double deg)
        {
            return (deg * Math.PI / 180.0);
        }
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        //::  This function converts radians to decimal degrees             :::
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        private static double Rad2Deg(double rad)
        {
            return (rad / Math.PI * 180.0);
        }
        public static Location BuscaPunto(Location startPoint, double initialBearingRadians, double distancemetres)
        {
            var distanceKilometres = distancemetres / 1000;
            var punto1 = new Location() { Latitude = startPoint.Latitude, Longitude = startPoint.Longitude };
            var nuevaposicion = FindPointAtDistanceFrom(punto1, initialBearingRadians, distanceKilometres);
            return (new Location(nuevaposicion.Latitude, nuevaposicion.Longitude));
        }
        private static Location FindPointAtDistanceFrom(Location startPoint, double initialBearingRadians, double distanceKilometres)
        {
            const double radiusEarthKilometres = 6371.01;
            var distRatio = distanceKilometres / radiusEarthKilometres;
            var distRatioSine = Math.Sin(distRatio);
            var distRatioCosine = Math.Cos(distRatio);

            var startLatRad = DegreesToRadians(startPoint.Latitude);
            var startLonRad = DegreesToRadians(startPoint.Longitude);

            var startLatCos = Math.Cos(startLatRad);
            var startLatSin = Math.Sin(startLatRad);

            var endLatRads = Math.Asin((startLatSin * distRatioCosine) + (startLatCos * distRatioSine * Math.Cos(initialBearingRadians)));

            var endLonRads = startLonRad
                + Math.Atan2(
                    Math.Sin(initialBearingRadians) * distRatioSine * startLatCos,
                    distRatioCosine - startLatSin * Math.Sin(endLatRads));

            return new Location()
            {
                Latitude = RadiansToDegrees(endLatRads),
                Longitude = RadiansToDegrees(endLonRads)
            };
        }
        private static double DegreesToRadians(double degrees)
        {
            const double degToRadFactor = Math.PI / 180;
            return degrees * degToRadFactor;
        }
        private static double RadiansToDegrees(double radians)
        {
            const double radToDegFactor = 180 / Math.PI;
            return radians * radToDegFactor;
        }

        public static double Bearing(Location origin, Location destination)
        {
            return Bearing(origin.Latitude, origin.Longitude, destination.Latitude, destination.Longitude);
        }
        private static double Bearing(double lat1, double long1, double lat2, double long2)
        {
            //Convert input values to radians   
            lat1 = DegreeToRadian(lat1);
            long1 = DegreeToRadian(long1);
            lat2 = DegreeToRadian(lat2);
            long2 = DegreeToRadian(long2);

            double deltaLong = long2 - long1;

            double y = Math.Sin(deltaLong) * Math.Cos(lat2);
            double x = Math.Cos(lat1) * Math.Sin(lat2) -
                    Math.Sin(lat1) * Math.Cos(lat2) * Math.Cos(deltaLong);
            double bearing = Math.Atan2(y, x);
            return bearing;
        }
        public static double DegreeToRadian(double angle)
        {
            return Math.PI * angle / 180.0;
        }
        public static double RadianToDegree(double angle)
        {
            return 180.0 * angle / Math.PI;
        }

        private static string CleanFileName(string fileName)
        {
            return Path.GetInvalidFileNameChars().Aggregate(fileName, (current, c) => current.Replace(c.ToString(), string.Empty));
        }
    }





}

