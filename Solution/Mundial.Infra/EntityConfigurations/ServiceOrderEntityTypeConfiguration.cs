using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class ServiceOrderEntityTypeConfiguration : IEntityTypeConfiguration<ServiceOrder>
    {
        public void Configure (EntityTypeBuilder<ServiceOrder> builder)
        {
            builder.ToTable("ServiceOrders");

            builder.HasKey(s => s.Id);

            builder
                .Property(s => s.Number)
                .IsRequired();

            builder
                .Property(s => s.CreationDate)
                .IsRequired();

            builder
                .HasMany(s => s.Installments)
                .WithOne()
                .HasForeignKey(s => s.ServiceOrderId);

            builder
                .HasOne(s => s.File)
                .WithMany(s=> s.ServicesOrders)
                .HasForeignKey(s => s.FileId);

            builder
                .HasOne(s => s.Salesman)
                .WithMany()
                .HasForeignKey(s => s.SalesmanId);

        }
    }
}
