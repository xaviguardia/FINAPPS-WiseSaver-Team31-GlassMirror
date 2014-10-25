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

namespace instacollect.Controllers
{
    [InitializeSimpleMembership]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();

        }
    }

}
