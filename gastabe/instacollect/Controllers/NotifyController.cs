using Google.Apis.Json;
using Google.Apis.Auth.OAuth2.Mvc;
using Google.Apis.Mirror.v1;
using Google.Apis.Mirror.v1.Data;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;
using querygram;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Mvc;
using System.Threading;
using System.Threading.Tasks;
using instacollect.Utils;
using querygram.Common;
using Newtonsoft.Json;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Auth.OAuth2.Flows;
using System.Text;
using System.IO;
using System.Web.Script.Serialization;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Services;
using System.Data.Entity.Infrastructure;



namespace instacollect.Controllers
{
    public class NotifyController : Controller
    {
        public string ApplicationName = "wisesaver";
        internal Repository<Subscribers> repositorySubscribers;
        internal Repository<UserLocations> repositoryUserLocations;
        internal Repository<KPI> repositoryKPI;
        public static string filePath = "C:\\inetpub\\wwwroot\\Desigual\\temp\\";
    


        public NotifyController()
        {
            repositorySubscribers = new Repository<Subscribers>(new Repository<Subscribers>().GetContext());
            repositoryUserLocations = new Repository<UserLocations>(new Repository<UserLocations>().GetContext());
            repositoryKPI = new Repository<KPI>(new Repository<KPI>().GetContext());
        }

        //
        // POST: /notify
        public async Task<ActionResult> GetSubscriptions()
        {
                 Notification notification =
                    new NewtonsoftJsonSerializer().Deserialize<Notification>(Request.InputStream);
                String userId = notification.UserToken;

                Subscribers subscriber = repositorySubscribers.Find(userId);

                try
                {
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
                        ApplicationName = "wisesaver"
                    });

                    SubscriptionsListResponse subscriptions = mirrSvc.Subscriptions.List().Execute();
                    Debug.WriteLine("subscriptions");
                    return Json(subscriptions, JsonRequestBehavior.AllowGet);

                }
                catch (Exception ex)
                {
                    string message;
                    message = String.Format("{0}--{1}", ex.Message, ex.InnerException != null ? ex.InnerException.Message : "");
                }

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);

        }

        public async Task<ActionResult> ClearSubscriptions()
        {
            Notification notification =
                new NewtonsoftJsonSerializer().Deserialize<Notification>(Request.InputStream);
            String userId = notification.UserToken;

            Subscribers subscriber = repositorySubscribers.Find(userId);

            try
            {
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
                    ApplicationName = "SmartExpense"
                });

                SubscriptionsListResponse subscriptions = mirrSvc.Subscriptions.List().Execute();
                foreach (Subscription s in subscriptions.Items)
                {
                    mirrSvc.Subscriptions.Delete(s.Id).Execute();
                }
                Debug.WriteLine("subscriptions");
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }


            return new HttpStatusCodeResult((int)HttpStatusCode.OK);

        }

     

     

   


    }
}
