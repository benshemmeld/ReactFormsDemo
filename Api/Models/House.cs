using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class House
    {
        public int Id {get;set;}
        public string Number {get;set;}

        public string Street {get;set;}

        public string Suburb {get;set;}
    }
}