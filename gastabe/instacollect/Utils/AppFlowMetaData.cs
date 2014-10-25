using Google.Apis.Oauth2.v2;
using Google.Apis.Oauth2.v2.Data;
using Google.Apis.Services;
using System;
using System.Collections.Specialized;
using System.Web;
using Google.Apis.Auth.OAuth2.Mvc;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Util.Store;
using System.Web.Mvc;
using Google.Apis.Mirror.v1;
using querygram.Common;

namespace instacollect.Utils
{
    class MyClass
    {

        public static String CLIENT_ID = "499598070210-4gudglmppg3h1gkm48ejr1pvcilrjggg.apps.googleusercontent.com";
        public static String CLIENT_SECRET = "kslJht8K-G3rKT6DyJW0Hmg7";
        static String[] SCOPES = new String[] {
          "https://www.googleapis.com/auth/glass.timeline",
          "https://www.googleapis.com/auth/userinfo.profile"
            };
    }
    public class AppFlowMetadata : FlowMetadata
    {
        private static readonly IAuthorizationCodeFlow flow =
            new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = new ClientSecrets
                {
                    ClientId = Utils.MyClass.CLIENT_ID,
                    ClientSecret = Utils.MyClass.CLIENT_SECRET

                },
                Scopes = new[] {  MirrorService.Scope.GlassTimeline,
                    MirrorService.Scope.GlassLocation,
                    Oauth2Service.Scope.UserinfoProfile,
                    Oauth2Service.Scope.UserinfoEmail,
                },
                DataStore = new FileDataStore("C:\\inetpub\\wwwroot\\Desigual\\temp")
            });



        public override string GetUserId(Controller controller)
        {
            var user = controller.Session["user"];
            if (user == null)
            {
                user = Guid.NewGuid();
                controller.Session["user"] = user;
            }
            return user.ToString();
        }

        public override IAuthorizationCodeFlow Flow
        {
            get { return flow; }
        }
    }
}