﻿using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
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
using WebMatrix.WebData;
using System.Web.Security;

namespace instacollect.Controllers
{
    public class PreferencesController : Controller
    {
        public string ApplicationName = "Wise Saver";
        internal Repository<Subscribers> repositorySubscribers;
        internal Repository<SubscriberPreference> repositorySubscriberPreference;
        internal Repository<KPI> repositoryKPI;

        public PreferencesController()
        {
            var ctx = new MirrorDBContext();
            repositorySubscribers = new Repository<Subscribers>(ctx);
            repositorySubscriberPreference = new Repository<SubscriberPreference>(ctx);
            repositoryKPI = new Repository<KPI>(ctx);
        }

        public ActionResult Error()
        {
            return View();
        }

        public ActionResult Denied()
        {
            return View();
        }

        public ActionResult Logout()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Privacy()
        {
            return View();
        }

        public async Task<ActionResult> Login(CancellationToken cancellationToken)
        {
            try
            {
                var result = await new AuthorizationCodeMvcApp(this, new AppFlowMetadata()).
                    AuthorizeAsync(cancellationToken);
                Google.Apis.Oauth2.v2.Data.Userinfoplus userinfo = new Google.Apis.Oauth2.v2.Data.Userinfoplus();


                if (result.Credential != null)
                {
                    var oauthSvc = new Oauth2Service(new BaseClientService.Initializer
                    {
                        HttpClientInitializer = result.Credential,
                        ApplicationName = ApplicationName
                    });

                    try
                    {
                        userinfo = await oauthSvc.Userinfo.Get().ExecuteAsync();
                        Session["userId"] = userinfo.Id;
                    }
                    catch (Exception ex)
                    {
                        result.Credential.RevokeTokenAsync(cancellationToken);
                        return RedirectToAction("Denied", "Mirror");
                    }

                    return RedirectToAction("Preferences");
                 
                }
                else
                {
                    return new RedirectResult(result.RedirectUri);
                }
            }
            catch (Exception ex)
            {
                //return new RedirectResult("https://www.vidaeschula.com");
                return RedirectToAction("ReLogin", "Mirror");
            }
        }


        public ActionResult Preferences()
        {
            SubscriberPreference preferences = new SubscriberPreference();
            if (Session["userId"] == null)
                return RedirectToAction("Login", "Preferences");
            var userId = Session["userId"].ToString();
     
            return View();
        }

        [HttpPost]
        public ActionResult Preferences(SubscriberPreference _preferences)
        {
            if (Session["userId"] == null)
                return RedirectToAction("Login", "Preferences");
        
            return View("Preferences");
        }

        public ActionResult Signout()
        {
            //WebSecurity.Logout();
            FormsAuthentication.SignOut();
            if (Session["userId"] != null)
                Session.Remove("userId");
            if (Session["user"] != null)
                Session.Remove("user");
            return Redirect("https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.wisesaver.net/");
        }

    
    }
}
