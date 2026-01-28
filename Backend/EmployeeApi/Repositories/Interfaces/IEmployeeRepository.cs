using EmployeeApi.Entities;

namespace EmployeeApi.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<Employee> AddAsync(Employee employee);
        Task<List<Employee>> GetAllAsync();
        Task<Employee?> GetByIdAsync(int id);
    }
}
