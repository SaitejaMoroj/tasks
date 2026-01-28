namespace EmployeeApi.DTOs.Auth
{
    public class ResetPasswordDto
    {
        public string EmailOrMobile { get; set; } = string.Empty;
        public string Otp { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }
}
