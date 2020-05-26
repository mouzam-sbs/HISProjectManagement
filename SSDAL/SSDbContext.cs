using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SSBOL;
using System;

namespace SSDAL
{

    public class SSDbContext : IdentityDbContext
    {
        public SSDbContext()
        {
            Database.Migrate();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(@"Server=CS-LPTP-DLPR-11;Database=OrganisationDb3;User Id=sa; Password=123456;");
        }

        public DbSet<Story> Stories { get; set; }
        public DbSet<HISCustomer> HISCustomers { get; set; }
        public DbSet<HISCustomerProductMapping> HISCustomerProductMappings { get; set; }
        public DbSet<HISCustomerProjectDetail> HISCustomerProjectDetails { get; set; }
        public DbSet<HISCustomerProject> HISCustomerProjects { get; set; }
        public DbSet<HISProduct> HISProducts { get; set; }
        public DbSet<HISProductModule> HISProductModules { get; set; }
        public DbSet<ParameterType> ParameterTypes { get; set; }
    }
}
