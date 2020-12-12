using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class AddressEntityTypeConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure (EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Address");

            builder.HasKey(s => s.Id);
    
            builder
                .Property(s => s.City)
                .IsRequired();

            builder
                .Property(s => s.CreationDate)
                .IsRequired();

               
        }
    }
}
