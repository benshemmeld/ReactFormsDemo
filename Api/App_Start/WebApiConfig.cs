using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Ninject;
using Ninject.Extensions.Conventions;

namespace Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            IKernel kernel = new StandardKernel();

            kernel.Bind(x =>
            {
                x.FromThisAssembly() // Scans currently assembly
                    .SelectAllClasses() // Retrieve all non-abstract classes
                    .BindDefaultInterface(); // Binds the default interface to them;
            });



            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
