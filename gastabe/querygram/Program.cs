using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Services;

namespace querygram
{
    class Program
    {
        static void Main(string[] args)
        {
            Utils.UpdateFromInstagram();
        }

        //private static void bajaimagen()
        //{
        //    var rc = new RestSharp.RestClient();
        //   // var rq = new RestSharp.RestRequest("https://api.instagram.com/v1/media/lavidaeschula?client_id=1f8d3aee83d14ea59dcd18d861fbcf44");
        //    var rq = new RestSharp.RestRequest("https://api.instagram.com/v1/tags/lavidaeschula/media/recent?client_id=1f8d3aee83d14ea59dcd18d861fbcf44");
        //    var ctx = new Contenedor();
        //    while (true)
        //    {
        //        var rp = rc.Execute<RootObject>(rq);
        //        GuardaEnDb(ctx, rp);
        //        var nextUrl = rp.Data.pagination !=null ? rp.Data.pagination.next_url : null;
        //        if (rp.Data.pagination == null || nextUrl == null)
        //            break;
        //        rq = new RestSharp.RestRequest(nextUrl);
        //        Console.WriteLine("Procesando..."+nextUrl);
        //    }
        //    Console.WriteLine("Fin");
        //    Console.Read();
        //}

        //private static bool GuardaEnDb(Contenedor ctx, RestSharp.IRestResponse<RootObject> rp)
        //{
        //    var inserted = 0;
        //    foreach (var ri in rp.Data.data)
        //    {
        //        var existe = ctx.InstaPictures.FirstOrDefault(t => t.InstaId == ri.id);
        //        if (existe == null)
        //        {
        //            existe = new InstaPicture()
        //            {
        //                InstaId = ri.id,
                      

        //                Time = ri.created_time,
        //                Likes = ri.likes.count,
        //                ImgLow = ri.images.low_resolution.url
        //            };
        //            if (ri.caption != null)
        //            {
        //                existe.Caption = ri.caption.text;
        //            }
        //            if (ri.location != null)
        //            {
        //                existe.Lat = ri.location.latitude;
        //                existe.Lng = ri.location.longitude;
        //            }
        //            ctx.InstaPictures.Add(existe);
        //            Console.WriteLine("Añado uno");
        //            inserted++;
        //        }
        //    }
        //    ctx.SaveChanges();
        //    return inserted==rp.Data.data.Count();
        //}
    }
}
