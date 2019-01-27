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
        DbSet<Person> People { get; set; }

        int SaveChanges();
    }
}
