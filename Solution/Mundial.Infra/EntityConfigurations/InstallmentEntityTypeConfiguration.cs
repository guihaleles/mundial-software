using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class InstallmentEntityTypeConfiguration : IEntityTypeConfiguration<Installment>
    {
        public void Configure (EntityTypeBuilder<Installment> builder)
        {
            builder.ToTable("Installments");

            builder.HasKey(s => s.Id);

            builder
                .Property(s => s.Number)
                .IsRequired();

            builder
                .Property(s => s.CreationDate)
                .IsRequired();


            builder
                .HasOne(s => s.Product)
                .WithMany()
                .HasForeignKey(s => s.ProductId);


        }
    }
}
