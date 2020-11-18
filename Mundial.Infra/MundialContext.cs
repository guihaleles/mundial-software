using System;
using Microsoft.EntityFrameworkCore;
using Mundial.Infra.Model;

namespace Mundial.Infra
{
    public class MundialContext: DbContext
    {

        // public DbSet<File> Files {get; set;}

        public DbSet<Salesman> Salesmens {get; set;}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=blog.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new SalesmanEntityTypeConfiguration().Configure(modelBuilder.Entity<Salesman>());
        }
    }
}
