using EmployeeApi.DTOs.Auth;

namespace EmployeeApi.Services.Interfaces
{
    public interface IAuthService
    {
        Task<object> SignupAsync(SignupRequestDto dto);
        Task<object?> LoginAsync(LoginRequestDto dto);
        Task<string> ForgotPasswordAsync(ForgotPasswordDto dto);
        Task<string> ResetPasswordAsync(ResetPasswordDto dto);
    }
}
