using System;
using System.Collections.Generic;
using System.Web.Http;
using DomainModel;

namespace Api.Controllers
{
    public class PersonController : ApiController
    {
        private readonly IContext _context;

        public PersonController(IContext context)
        {
            _context = context;
        }

        public Person Get(int id)
        {
            var person = _context.People.Find(id);
            return person;
        }

        public List<Person> CreateTestData()
        {
            for (var i = 0; i < 100; i++)
            {
                _context.People.Add(new Person
                {
                    Firstname = Guid.NewGuid().ToString().Substring(0,20),
                    Lastname = Guid.NewGuid().ToString().Substring(0, 20),
                    DateOfBirth = 
            });
            }
        }
    }
}
