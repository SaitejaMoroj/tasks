using EmployeeApi.DTOs.Employee;

namespace EmployeeApi.Services.Interfaces
{
    public interface IEmployeeService
    {
        Task<EmployeeResponseDto> CreateEmployeeAsync(EmployeeCreateDto dto);
        Task<List<EmployeeResponseDto>> GetAllEmployeesAsync();
        Task<EmployeeResponseDto?> GetEmployeeByIdAsync(int id);
    }
}
