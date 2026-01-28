using EmployeeApi.DTOs.Auth;
using EmployeeApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        // ---------------- SIGNUP ----------------
        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupRequestDto dto)
        {
            var user = await _authService.SignupAsync(dto);

            return Ok(new
            {
                message = "Signup successful",
                user = user
            });
        }

        // ---------------- LOGIN ----------------
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto dto)
        {
            var user = await _authService.LoginAsync(dto);

            if (user == null)
                return Unauthorized("Invalid email or password");

            return Ok(user); // Frontend will store this in localStorage
        }

        // ---------------- FORGOT PASSWORD ----------------
        [HttpPost("forgot")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto dto)
        {
            var result = await _authService.ForgotPasswordAsync(dto);
            return Ok(new { message = result });
        }

        // ---------------- RESET PASSWORD ----------------
        [HttpPost("reset")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto dto)
        {
            var result = await _authService.ResetPasswordAsync(dto);
            return Ok(new { message = result });
        }
    }
}
