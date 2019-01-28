using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var file = Server.MapPath("/") + "../Web/dist/";
            var pathAndQuery = Request.Url.PathAndQuery;
            if(pathAndQuery.ToLower().StartsWith("js/"))
            {
                file += pathAndQuery;
            }
            else
            {
                file += "index.html";
            }

            return File(file, "text/html"); 
        }
    }
}