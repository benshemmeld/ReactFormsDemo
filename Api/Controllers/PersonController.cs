using System;
using System.Collections.Generic;
using System.Web.Http;
using DomainModel;

namespace Api.Controllers
{
    public class PersonController : ApiController
    {
        private readonly IContext _context;
        private readonly Random _random;

        public PersonController(IContext context)
        {
            _context = context;
            _random = new Random();
        }

        public Person Get(int id)
        {
            var person = _context.People.Find(id);
            return person;
        }

        public List<Person> CreateTestData()
        {
            var result = new List<Person>();
            for (var i = 0; i < 100; i++)
            {
                var person = new Person
                {
                    Firstname = Guid.NewGuid().ToString().Substring(0, 20),
                    Lastname = Guid.NewGuid().ToString().Substring(0, 20),
                    DateOfBirth = DateTime.Now.AddDays(-_random.Next(365 * 50))
                };
                _context.People.Add(person);
                _context.SaveChanges();
                result.Add(person);
            }

            return result;
        }
    }
}
