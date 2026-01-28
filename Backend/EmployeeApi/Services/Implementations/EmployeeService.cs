using EmployeeApi.DTOs.Employee;
using EmployeeApi.Entities;
using EmployeeApi.Repositories.Interfaces;
using EmployeeApi.Services.Interfaces;

namespace EmployeeApi.Services.Implementations
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _repo;

        public EmployeeService(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        public async Task<EmployeeResponseDto> CreateEmployeeAsync(EmployeeCreateDto dto)
        {
            var employee = new Employee
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Department = dto.Department,
                Position = dto.Position,
                Salary = dto.Salary,
                DateOfJoining = dto.DateOfJoining,
                IsActive = true
            };

            var created = await _repo.AddAsync(employee);

            return new EmployeeResponseDto
            {
                Id = created.Id,
                FirstName = created.FirstName,
                LastName = created.LastName,
                Email = created.Email,
                Department = created.Department,
                Position = created.Position,
                Salary = created.Salary,
                DateOfJoining = created.DateOfJoining,
                IsActive = created.IsActive
            };
        }

        public async Task<List<EmployeeResponseDto>> GetAllEmployeesAsync()
        {
            var employees = await _repo.GetAllAsync();

            return employees.Select(e => new EmployeeResponseDto
            {
                Id = e.Id,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Email = e.Email,
                Department = e.Department,
                Position = e.Position,
                Salary = e.Salary,
                DateOfJoining = e.DateOfJoining,
                IsActive = e.IsActive
            }).ToList();
        }

        public async Task<EmployeeResponseDto?> GetEmployeeByIdAsync(int id)
        {
            var e = await _repo.GetByIdAsync(id);
            if (e == null) return null;

            return new EmployeeResponseDto
            {
                Id = e.Id,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Email = e.Email,
                Department = e.Department,
                Position = e.Position,
                Salary = e.Salary,
                DateOfJoining = e.DateOfJoining,
                IsActive = e.IsActive
            };
        }
    }
}
