using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace instacollect
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                 "Default",
                 "{controller}/{action}/{id}",
                new {controller = "Home", action = "Index", id = UrlParameter.Optional },
               new string [] {"instacollect.Controllers"}
            );

            routes.MapRoute(
                 "Settings",
                 "Settings",
                new { controller = "Mirror", action = "Login", id = UrlParameter.Optional },
               new string[] { "instacollect.Controllers" }
            );

            routes.MapRoute(
                "Admin", // Route name
                "Admin", // URL con parámetros
                new { controller = "Accounts", action = "Login", id = UrlParameter.Optional }, // Parameter defaults
                new string[] { "instacollect.Admin.Controllers" }
            );
        }
    }
}