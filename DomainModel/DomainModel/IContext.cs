using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel
{
    public interface IContext
    {
        DbSet<House> Houses { get; set; }
        DbSet<Phone> Phones { get; set; }
        DbSet<State> States { get; set; }
        DbSet<Street> Streets { get; set; }
        DbSet<Suburb> Suburbs { get; set; }

        int SaveChanges();
    }
}
