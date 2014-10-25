using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Mirror.v1;
using Google.Apis.Services;
using instacollect.Utils;
using querygram;
using querygram.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace instacollect.Controllers
{
    public class CardsController : Controller
    {
        //
        // GET: /Cards/
        internal Repository<Subscribers> repositorySubscribers;
        public CardsController()
        {
            var ctx = new MirrorDBContext();
            repositorySubscribers = new Repository<Subscribers>(ctx);
        }

        public async Task<ActionResult> Welcome(CancellationToken cancellationToken)
        {
            MirrorService mirrSvc = await GetServiceForUser();
            var filename = Server.MapPath("~/Cards/welcome.html");
            MirrorUtils.InsertIteFromTemplate(mirrSvc, filename, new { });
            return View();
        }


        public async Task<ActionResult> Charge(CancellationToken cancellationToken)
        {
            MirrorService mirrSvc = await GetServiceForUser();
            var filename = Server.MapPath("~/Cards/Charge.html");
            var objcharge = new { store = "Manga Clothing", amount = "24,95€", cardno = "**** **** **** 4135" };
            MirrorUtils.InsertIteFromTemplate(mirrSvc, filename, objcharge);
            return View();
        }

        public async Task<ActionResult> Tomorrow(CancellationToken cancellationToken)
        {
            MirrorService mirrSvc = await GetServiceForUser();
            var filename = Server.MapPath("~/Cards/tomorrow.html");
            MirrorUtils.InsertIteFromTemplate(mirrSvc, filename, new { });
            return View();
        }

        public async Task<ActionResult> Congrats(CancellationToken cancellationToken)
        {
            MirrorService mirrSvc = await GetServiceForUser();
            var filename = Server.MapPath("~/Cards/Congrats.html");
            MirrorUtils.InsertIteFromTemplate(mirrSvc, filename, new { days="26" });
            return View();
        }

    
     



        private async Task<MirrorService> GetServiceForUser()
        {
            Subscribers subscriber = repositorySubscribers.All.FirstOrDefault();
            var token = new TokenResponse { RefreshToken = subscriber.RefreshToken };
            var userCredential = new UserCredential(new GoogleAuthorizationCodeFlow(
                new GoogleAuthorizationCodeFlow.Initializer
                {
                    ClientSecrets = new ClientSecrets { ClientId = Utils.MyClass.CLIENT_ID, ClientSecret = Utils.MyClass.CLIENT_SECRET }
                }), subscriber.Id, token);
            await userCredential.RefreshTokenAsync(CancellationToken.None);
            MirrorService mirrSvc = new MirrorService(new BaseClientService.Initializer
            {
                HttpClientInitializer = userCredential,
                ApplicationName = "WiseSaver"
            });
            return mirrSvc;
        }

    }
}
