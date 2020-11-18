using System;
using Microsoft.EntityFrameworkCore;
using Mundial.Infra.Model;
using Mundial.Infra.EntityConfigurations;

namespace Mundial.Infra
{
    public class MundialContext: DbContext
    {

        // public DbSet<File> Files {get; set;}

        public DbSet<Salesman> Salesmens {get; set;}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer("server=localhost,3306;uid=mundial;pwd=mundial;database=MundialDB");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new SalesmanEntityTypeConfiguration().Configure(modelBuilder.Entity<Salesman>());
        }
    }
}
