using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using querygram.Common;
using querygram;
using Google.Apis.Auth.OAuth2.Mvc;
using Google.Apis.Mirror.v1;
using Google.Apis.Mirror.v1.Data;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;
using instacollect.Utils;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using System.Web.Script.Serialization;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Auth.OAuth2;
using System.Diagnostics;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Util.Store;
using Mustache;

namespace instacollect.Utils
{
    public class MirrorUtils
    {
        public static double Distance = 1;
        public static string ApplicationName = "Life is chula";

        public static String InsertIteFromTemplate(MirrorService mirrorService,string TemplateFile, dynamic model)
        {
            var result = "";
            using (var streamReader = new StreamReader(TemplateFile))
            {
                string text = streamReader.ReadToEnd();
                FormatCompiler compiler = new FormatCompiler();
                Generator generator = compiler.Compile(text);
                 result = generator.Render(model);
               
            }
            TimelineItem item = new TimelineItem()
            {
                Text = "",
                Notification = new NotificationConfig() { Level = "DEFAULT" },
                Html = result
            };

            TimelineItem response = mirrorService.Timeline.Insert(item).Execute();

            return "A timeline item has been inserted.";
        }
        
        public static String InsertItem(MirrorService mirrorService, string message, string imageUrl)
        {
            string html = "";
            //cover card
            html += "<article class=\"cover-only photo\">";
            html += "<img src=\"{0}\" width=\"100%\" align=\"middle\"/>";
            html += "<section>";
            html += "<p class=\"text-auto-size\">{1}</p>";
            html += "</section>";
            html += "</article>";


            //desigual card
            html += "<article class=\"auto-paginate\">";
            html += "<p class=\"text-auto-size\">{2}</p>";
            html += "</article >";
            html = String.Format(html, imageUrl, message, "Welcome");

            TimelineItem item = new TimelineItem()
            {
                Text = message,
                Notification = new NotificationConfig() { Level = "DEFAULT" },
                Html = html
            };
        
            TimelineItem response = mirrorService.Timeline.Insert(item).Execute();

            return "A timeline item has been inserted.";
        }
        /*
        public static String InsertNavigateImageItem(MirrorService mirrorService, string message, images images, string bundleId)
        {
            List<MenuItem> MenuItems = new List<MenuItem>();
            List<MenuValue> values = new List<MenuValue>();
            Google.Apis.Mirror.v1.Data.Location location = new Google.Apis.Mirror.v1.Data.Location();
            location.Latitude = images.latitude;
            location.Longitude = images.longitude;
            #region menuItemLIKE
            values.Add(new MenuValue()
            {
                State = "DEFAULT",
                DisplayName = "Like",
                IconUrl = "https://www.vidaeschula.com/Content/images/menuicon/ic_like_50.png",
            });
            values.Add(new MenuValue()
            {
                State = "PENDING",
                DisplayName = "Sending...",
            });
            values.Add(new MenuValue()
            {
                State = "CONFIRMED",
                DisplayName = "Complete...",
                IconUrl = "https://www.vidaeschula.com/Content/images/menuicon/ic_done_50.png",

            });
            MenuItem customMenuItem = new MenuItem()
            {
                Action = "CUSTOM",
                Id = "like>><<" + images.id,
                RemoveWhenSelected = true,
                Values = values
            };
            MenuItems.Add(customMenuItem);
            #endregion

            #region menuItemNAVIGATE
            if (location.Latitude != 0 && location.Longitude != 0)
                MenuItems.Add(new MenuItem() { Action = "NAVIGATE" });
            #endregion

            #region menuItemDESWEB
            values = new List<MenuValue>();
            values.Add(new MenuValue()
            {
                State = "DEFAULT",
                DisplayName = "DESIGUAL WEB",
                IconUrl = "https://www.vidaeschula.com/assets/La_vida_es_chula_icon_white_50.png",

            });
            customMenuItem = new MenuItem()
            {
                Action = "OPEN_URI",
                Id = "web>><<" + images.id,
                RemoveWhenSelected = true,
                Payload = "http://www.desigual.com",
                Values = values
            };
            MenuItems.Add(customMenuItem);
            #endregion


            #region menuItemDESVIDEO
            values = new List<MenuValue>();
            values.Add(new MenuValue()
            {
                State = "DEFAULT",
                DisplayName = "COLLECTION VIDEO",
                IconUrl = "https://www.vidaeschula.com/assets/La_vida_es_chula_icon_white_50.png",

            });
            customMenuItem = new MenuItem()
            {
                Action = "PLAY_VIDEO",
                Id = "video>><<" + images.id,
                Payload = "https://www.vidaeschula.com/Content/media/collection.mkv",
                Values = values
            };
            MenuItems.Add(customMenuItem);
            #endregion
          


            string html = InstaBundleCardHtml(images, message);
            TimelineItem item = new TimelineItem()
            {
                BundleId = bundleId,
                Text = message,
                Location = location,
                MenuItems = MenuItems,
                SourceItemId = images.id,
                Html = html,
                Notification = new NotificationConfig() { Level = "DEFAULT" }
            };

            TimelineItem response = mirrorService.Timeline.Insert(item).Execute();

            return "A timeline item has been inserted.";
        }
        */
  


       


        public static double DistanceKm(double lat1, double lon1, double lat2, double lon2)
        {
            double distance = 0.0;
            distance = Math.Acos(Math.Sin(Math.PI * lat1 / 180.0) * Math.Sin(Math.PI * lat2 / 180.0) + Math.Cos(Math.PI * lat1 / 180.0) * Math.Cos(Math.PI * lat2 / 180.0) * Math.Cos(Math.PI * lon2 / 180 - Math.PI * lon1 / 180.0)) * 6371;
            return distance;
        }

        public static void oAuthRevokeToken(string token)
        {
            string Url = String.Format("https://accounts.google.com/o/oauth2/revoke?token={0}", token);
            HttpWebRequest request = HttpWebRequest.Create(Url) as HttpWebRequest;
            string result = null;
            request.Method = "GET";
            using (WebResponse response = request.GetResponse())
            {
                var sr = new StreamReader(response.GetResponseStream());
                result = sr.ReadToEnd();
                sr.Close();
            }


        }


        public static MirrorService oAuthAccessToken(Subscribers _subscriber, String _userId)
        {
            var token = new TokenResponse  { RefreshToken = _subscriber.RefreshToken };
            var userCredential = new UserCredential(new GoogleAuthorizationCodeFlow(
                new GoogleAuthorizationCodeFlow.Initializer
                {
                    ClientSecrets = new ClientSecrets { ClientId = Utils.MyClass.CLIENT_ID, ClientSecret = Utils.MyClass.CLIENT_SECRET }
                }), _subscriber.Id, token);

            bool success = userCredential.RefreshTokenAsync(CancellationToken.None).Result;

            MirrorService mirrSvc = new MirrorService(new BaseClientService.Initializer
            {
                HttpClientInitializer = userCredential,
                ApplicationName = ApplicationName
            });

            return mirrSvc;
        }
    }
}