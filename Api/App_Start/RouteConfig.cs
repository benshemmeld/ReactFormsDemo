using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Api
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "React",
                "{item1}/{item2}/{item3}",
                new { controller = "Home", action = "Index" },
                new { item1 = ".*?", item2=".*?", item3 = ".*?" }
            );

            //routes.MapRoute(
            //    name: "",
            //    url: "",
            //    defaults: new {}
            //);
        }
    }
}
