﻿using System;
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
                "default",
                "",
                new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                "React1",
                "{*url}",
                new { controller = "Home", action = "Index" }
            );
        }
    }
}
