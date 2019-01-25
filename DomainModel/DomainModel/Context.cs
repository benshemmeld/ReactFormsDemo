namespace DomainModel
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Context : DbContext, IContext
    {
        public Context()
            : base("name=Whitepages")
        {
        }

        public virtual DbSet<House> Houses { get; set; }
        public virtual DbSet<Phone> Phones { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<Street> Streets { get; set; }
        public virtual DbSet<Suburb> Suburbs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<House>()
                .HasMany(e => e.Phones)
                .WithRequired(e => e.House)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<State>()
                .HasMany(e => e.Houses)
                .WithRequired(e => e.State)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<State>()
                .HasMany(e => e.Suburbs)
                .WithRequired(e => e.State)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Street>()
                .HasMany(e => e.Houses)
                .WithRequired(e => e.Street)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Suburb>()
                .HasMany(e => e.Houses)
                .WithRequired(e => e.Suburb)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Suburb>()
                .HasMany(e => e.Streets)
                .WithRequired(e => e.Suburb)
                .WillCascadeOnDelete(false);
        }
    }
}
