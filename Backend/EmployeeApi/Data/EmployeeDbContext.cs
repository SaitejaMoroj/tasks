using EmployeeApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApi.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees => Set<Employee>();
        public DbSet<User> Users => Set<User>();
    }
}
