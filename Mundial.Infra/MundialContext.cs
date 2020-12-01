using System;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Mundial.Infra.Model;
using Mundial.Infra.EntityConfigurations;

namespace Mundial.Infra
{
    public class MundialContext: DbContext
    {

        public DbSet<File> Files {get; set;}

        public DbSet<Address> Addresses {get; set;}

        public DbSet<Salesman> Salesmans {get; set;}
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;port=3306;user=mundial;password=mundial;database=MundialDB");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new SalesmanEntityTypeConfiguration().Configure(modelBuilder.Entity<Salesman>());

            new FileEntityTypeConfiguration().Configure(modelBuilder.Entity<File>());

            new AddressEntityTypeConfiguration().Configure(modelBuilder.Entity<Address>());

        }
    }
}
