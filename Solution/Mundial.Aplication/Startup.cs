using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Mundial.Domain.Service.Concrete;
using Mundial.Infra.Repository;
using Mundial.Infra.EntityConfigurations;
using Mundial.Infra;

namespace Mundial.Aplication
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                // options.AddPolicy("CorsPolicy",
                options.AddDefaultPolicy(
                              builder =>
                              {
                                builder.WithOrigins("http://localhost:4200",
                                "http://localhost:*", "http://localhost","*",
                                "http://localhost:5000", "https://localhost:5001")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                              });
            });

            services.AddControllers();

            services.AddScoped<FileService>();

            services.AddSingleton<FileEntityTypeConfiguration>();

            services.AddScoped<FileRepository>();

            services.AddScoped<SalesmanService>();

            services.AddSingleton<SalesmanEntityTypeConfiguration>();

            services.AddScoped<SalesmanRepository>();

            services.AddScoped<ProductService>();

            services.AddScoped<ProductEntityTypeConfiguration>();

            services.AddScoped<ProductRepository>();

            services.AddScoped<ServiceOrderService>();

            services.AddSingleton<ServiceOrderEntityTypeConfiguration>();

            services.AddScoped<ServiceOrderRepository>();

            services.AddScoped<InstallmentService>();

            services.AddSingleton<InstallmentEntityTypeConfiguration>();

            services.AddScoped<InstallmentRepository>();

            services.AddScoped<CheckRepository>();

            services.AddTransient<MundialContext>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();
            
            // app.UseCors("CorsPolicy");
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
