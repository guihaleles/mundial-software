using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class ProductEntityTypeConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure (EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Products");

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
