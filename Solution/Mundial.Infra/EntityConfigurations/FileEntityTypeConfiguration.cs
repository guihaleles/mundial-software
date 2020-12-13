using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mundial.Infra.Model;

namespace Mundial.Infra.EntityConfigurations
{
    public class FileEntityTypeConfiguration : IEntityTypeConfiguration<File>
    {
        public void Configure (EntityTypeBuilder<File> builder)
        {
            builder.ToTable("File");

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


            // builder 
            //     .HasOne(s => s.CustomerAddress)
            //     .WithMany()
            //     .HasForeignKey(s => s.CustomerAddressId);

            // builder 
            //     .HasOne(s => s.WorkAddress)
            //     .WithMany()
            //     .HasForeignKey(s => s.WorkAddressId);
                
        }
    }
}
