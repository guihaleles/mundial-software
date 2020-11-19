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

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddScoped<FileService>();

            services.AddSingleton<FileEntityTypeConfiguration>();

            services.AddScoped<FileRepository>();

            services.AddScoped<SalesmanService>();

            services.AddSingleton<SalesmanEntityTypeConfiguration>();

            services.AddScoped<SalesmanRepository>();

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

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
