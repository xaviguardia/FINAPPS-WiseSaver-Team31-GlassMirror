using Google.Apis.Json;
using Google.Apis.Auth.OAuth2.Mvc;
using Google.Apis.Mirror.v1;
using Google.Apis.Mirror.v1.Data;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using querygram;
using Services;
using System.Data.Entity.Infrastructure;
using Newtonsoft.Json;
using querygram.Common;
using System.Net.Mail;
using System.Threading;
using instacollect.Utils;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Diagnostics;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;

namespace instacollect.Controllers
{
    public class XApiController : Controller
    {
        internal Repository<RemindersUsers> repositoryRemindersUsers;
        internal Repository<EmailsLog> repositoryEmailsLog;
        internal Repository<Subscribers> repositorySubscribers;
        internal Repository<SubscriberPreference> repositorySubscriberPreference;
    
        public XApiController()
        {
            repositoryRemindersUsers = new Repository<RemindersUsers>(new Repository<RemindersUsers>().GetContext());
            repositoryEmailsLog = new Repository<EmailsLog>(new Repository<EmailsLog>().GetContext());
            repositorySubscribers = new Repository<Subscribers>(new Repository<Subscribers>().GetContext());
            repositorySubscriberPreference = new Repository<SubscriberPreference>(new Repository<SubscriberPreference>().GetContext());
        }



      









    }
}
