using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using querygram;
using instacollect.utils;
using Services;
using Newtonsoft.Json.Linq;
using System.IO;
using Newtonsoft.Json;
using instacollect.Utils;
using System.Threading.Tasks;
using System.Threading;
using Google.Apis.Auth.OAuth2.Mvc;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;
using System.Web.Security;

namespace instacollect.Controllers
{
    [InitializeSimpleMembership]
    public class HomeController : Controller
    {
        public ActionResult UserMenu()
        {
            return View();
        }

        public async Task<ActionResult> Index(CancellationToken cancellationToken)
        {

            var result = await new AuthorizationCodeMvcApp(this, new AppFlowMetadata()).
                AuthorizeAsync(cancellationToken);
            Google.Apis.Oauth2.v2.Data.Userinfoplus userinfo = new Google.Apis.Oauth2.v2.Data.Userinfoplus();


            if (result.Credential != null)
            {
                var oauthSvc = new Oauth2Service(new BaseClientService.Initializer
                {
                    HttpClientInitializer = result.Credential,
                    ApplicationName = "wisesaver"
                });

                userinfo = await oauthSvc.Userinfo.Get().ExecuteAsync();
                Session["userId"] = userinfo.Id;
                ViewBag.userid = userinfo.Id;
                return View();
            }
            else
            {
                return new RedirectResult(result.RedirectUri);
            }
        }

        public ActionResult Logout()
        {
            if (Session["userId"] != null)
                Session.Remove("userId");
            if (Session["user"] != null)
                Session.Remove("user");
            return Redirect("https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://wisesaver.sfy.com/home/loggedout");
        }

        public ActionResult LoggedOut()
        {
            return View();
        
        }


    }

}
