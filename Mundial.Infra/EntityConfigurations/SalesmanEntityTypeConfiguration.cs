using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;
public class SalesmanEntityTypeConfiguration : IEntityTypeConfiguration<Salesman>
{
    public void Configure (EntityTypeBuilder<Salesman> builder)
    {
        builder.HasKey(s => s.Number);

         builder
            .Property(s => s.Name)
            .IsRequired();

         builder
            .Property(s => s.Number)
            .IsRequired();      
    }
}
