using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Google.Apis.Auth.OAuth2.Responses;
using instacollect.Utils;
using querygram;
using querygram.Common;

namespace instacollect.Controllers
{
    public class AuthCallbackController : Google.Apis.Auth.OAuth2.Mvc.Controllers.AuthCallbackController
    {

        protected override Google.Apis.Auth.OAuth2.Mvc.FlowMetadata FlowData
        {
            get { return new AppFlowMetadata(); }
        }

        void MethodNoArguments()
        {
            Console.WriteLine("MethodNoArguments()");
        }

        public override Task<ActionResult> IndexAsync(AuthorizationCodeResponseUrl authorizationCode, CancellationToken taskCancellationToken)
        {
            if (!String.IsNullOrEmpty(authorizationCode.Error))
                return Task.Factory.StartNew(MethodNoArguments).ContinueWith<ActionResult>(
                    t =>
                    {
                        return RedirectToAction("Denied", "Mirror");
                    });
            return base.IndexAsync(authorizationCode, taskCancellationToken);
        }

    }
}
