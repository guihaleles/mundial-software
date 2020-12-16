using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class SalesmanEntityTypeConfiguration : IEntityTypeConfiguration<Salesman>
    {
        public void Configure (EntityTypeBuilder<Salesman> builder)
        {
            builder.ToTable("Salesmans");

            builder.HasKey(s => s.Id);
    
            builder
                .Property(s => s.Name)
                .IsRequired();
    
            builder
                .Property(s => s.Number)
                .IsRequired();   
    
            builder
                .Property(s => s.CreationDate)
                .IsRequired();

               
        }
    }
}
