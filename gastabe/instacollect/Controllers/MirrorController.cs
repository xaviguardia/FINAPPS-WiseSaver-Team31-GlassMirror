using System;
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
    public class MirrorController : Controller
    {
        public string ApplicationName = "FinApps SmartExpense";
        internal Repository<Subscribers> repositorySubscribers;
        internal Repository<SubscriberPreference> repositorySubscriberPreference;
        internal Repository<KPI> repositoryKPI;

        public MirrorController()
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


        public ActionResult ErrorOops()
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

            Google.Apis.Auth.OAuth2.Web.AuthorizationCodeWebApp.AuthResult result = await new AuthorizationCodeMvcApp(this, new AppFlowMetadata()).
                AuthorizeAsync(cancellationToken);
            Google.Apis.Oauth2.v2.Data.Userinfoplus userinfo = new Google.Apis.Oauth2.v2.Data.Userinfoplus();
            if (result.Credential != null)
            {
                var mirrSvc = new MirrorService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = result.Credential,
                    ApplicationName = ApplicationName
                });
                var oauthSvc = new Oauth2Service(new BaseClientService.Initializer
                {
                    HttpClientInitializer = result.Credential,
                    ApplicationName = ApplicationName
                });
                userinfo = await oauthSvc.Userinfo.Get().ExecuteAsync();
                Session["userId"] = userinfo.Id;

                BootstrapUser(mirrSvc, userinfo.Id, result, userinfo.Email);

                return RedirectToAction("Login", "Preferences");
            }
            else
            {
                return new RedirectResult(result.RedirectUri);
            }
        }

        private void BootstrapUser(MirrorService mirrorService, string userId, Google.Apis.Auth.OAuth2.Web.AuthorizationCodeWebApp.AuthResult auth, string userEmail)
        {
            var subscriber = repositorySubscribers.Find(userId);
            if (subscriber == null)
            {
                if (auth.Credential.Token.RefreshToken == null)
                {
                    MirrorUtils.oAuthRevokeToken(auth.Credential.Token.AccessToken);
                    RedirectToAction("Error");
                }
                subscriber = new Subscribers
                {
                    Id = userId,
                    SubscriptionDate = DateTime.Now,
                    UnSubscriptionDate = null,
                    Active = true,
                    AccessToken = auth.Credential.Token.AccessToken.ToString(),
                    Scope = auth.Credential.Token.Scope != null ? auth.Credential.Token.Scope.ToString() : "",
                    RefreshToken = auth.Credential.Token.RefreshToken != null ? auth.Credential.Token.RefreshToken.ToString() : "",
                    TokenType = auth.Credential.Token.TokenType != null ? auth.Credential.Token.TokenType.ToString() : "",
                    ExpirationToken = auth.Credential.Token.ExpiresInSeconds != null ? DateTime.Now.AddSeconds((double)auth.Credential.Token.ExpiresInSeconds) : DateTime.Now,
                    ExpireIn = auth.Credential.Token.ExpiresInSeconds,
                    Issued = auth.Credential.Token.Issued,
                    Email = userEmail,
                };
            }
            else
            {
                if (String.IsNullOrEmpty(subscriber.RefreshToken) && String.IsNullOrEmpty(auth.Credential.Token.RefreshToken))
                {
                    subscriber.Active = false;
                    repositorySubscribers.InsertOrUpdate(subscriber);
                    repositorySubscribers.Save();
                    MirrorUtils.oAuthRevokeToken(auth.Credential.Token.AccessToken);
                    RedirectToAction("ErrorOops");
                }

                if (subscriber.Active == false || auth.Credential.Token.RefreshToken != null)
                {
                    subscriber.Active = true;
                }
                subscriber.AccessToken = auth.Credential.Token.AccessToken.ToString();
                if (auth.Credential.Token.Scope != null)
                    subscriber.Scope = auth.Credential.Token.Scope.ToString();
                if (auth.Credential.Token.RefreshToken != null)
                    subscriber.RefreshToken = auth.Credential.Token.RefreshToken.ToString();
                if (auth.Credential.Token.TokenType != null)
                    subscriber.TokenType = auth.Credential.Token.TokenType.ToString();
                if (auth.Credential.Token.ExpiresInSeconds != null)
                    subscriber.ExpirationToken = DateTime.Now.AddSeconds((double)auth.Credential.Token.ExpiresInSeconds);
                subscriber.ExpireIn = auth.Credential.Token.ExpiresInSeconds;
                if (auth.Credential.Token.ExpiresInSeconds != null)
                    subscriber.Issued = auth.Credential.Token.Issued;
            }
            repositorySubscribers.InsertOrUpdate(subscriber);
            repositorySubscribers.Save();
            Subscription subscription = new Subscription();
            List<string> operations = new List<string>();
            operations.Add("UPDATE");
            operations.Add("INSERT");
            repositorySubscribers.Save();
        }

        public async Task<ActionResult> Revoke(CancellationToken cancellationToken)
        {
            try
            {
                Google.Apis.Auth.OAuth2.Web.AuthorizationCodeWebApp.AuthResult result = await new AuthorizationCodeMvcApp(this, new AppFlowMetadata()).
                    AuthorizeAsync(cancellationToken);
                Google.Apis.Oauth2.v2.Data.Userinfoplus userinfo = new Google.Apis.Oauth2.v2.Data.Userinfoplus();
                if (result.Credential != null)
                {
                    result.Credential.RevokeTokenAsync(cancellationToken);
                    return RedirectToAction("Login", "Mirror");
                }
                return RedirectToAction("Login", "Mirror");
            }
            catch (Exception ex)
            {
                return RedirectToAction("Login", "Mirror");
            }

        }

        public async Task<ActionResult> ReLogin(CancellationToken cancellationToken)
        {
            try
            {
                Google.Apis.Auth.OAuth2.Web.AuthorizationCodeWebApp.AuthResult result = await new AuthorizationCodeMvcApp(this, new AppFlowMetadata()).
                    AuthorizeAsync(cancellationToken);
                Google.Apis.Oauth2.v2.Data.Userinfoplus userinfo = new Google.Apis.Oauth2.v2.Data.Userinfoplus();


                if (result.Credential != null)
                {
                    var mirrSvc = new MirrorService(new BaseClientService.Initializer
                    {
                        HttpClientInitializer = result.Credential,
                        ApplicationName = ApplicationName
                    });

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
                        return RedirectToAction("Login", "Mirror");
                    }

                    BootstrapUser(mirrSvc, userinfo.Id, result, userinfo.Email);

                    return RedirectToAction("Login", "Preferences");
                }
                else
                {
                    return new RedirectResult(result.RedirectUri);
                }
            }
            catch (Exception ex)
            {
                string message;
                message = String.Format("{0}--{1}", ex.Message, ex.InnerException != null ? ex.InnerException.Message : "");
                return RedirectToAction("Error", "Mirror");
            }
        }

        public ActionResult Preferences()
        {
            return RedirectToAction("Login", "Preferences");
        }

    }
}
