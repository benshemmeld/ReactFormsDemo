using System.Web.Http;
using DomainModel;
using House = Api.Models.House;

namespace Api.Controllers
{
    public class HouseController : ApiController
    {
        private readonly IContext _context;

        public HouseController(IContext context)
        {
            _context = context;
        }

        public House Get(int id)
        {
            var house = _context.Houses.Find(id);
            var model = new House
            {
                Id = house.HouseId,
                Number = house.Number,
                Street = house.Street.Name,
                Suburb = house.Suburb.Name
            };
            return model;
        }
    }
}
