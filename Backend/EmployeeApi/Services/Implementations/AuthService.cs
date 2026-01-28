using EmployeeApi.Data;
using EmployeeApi.DTOs.Auth;
using EmployeeApi.Entities;
using EmployeeApi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApi.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly EmployeeDbContext _context;

        public AuthService(EmployeeDbContext context)
        {
            _context = context;
        }

        // ---------------- SIGNUP ----------------
        public async Task<object> SignupAsync(SignupRequestDto dto)
        {
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == dto.Email);

            if (existingUser != null)
                throw new Exception("User already exists with this email");

            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Password = dto.Password, // TODO: hash later
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new
            {
                user.Id,
                user.FullName,
                user.Email
            };
        }

        // ---------------- LOGIN ----------------
        public async Task<object?> LoginAsync(LoginRequestDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.Email == dto.Email && x.Password == dto.Password);

            if (user == null)
                return null;

            return new
            {
                user.Id,
                user.FullName,
                user.Email
            };
        }

        // ---------------- FORGOT PASSWORD ----------------
        public async Task<string> ForgotPasswordAsync(ForgotPasswordDto dto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == dto.EmailOrMobile);

            if (user == null)
                return "User not found";

            // TODO: Generate OTP and save to DB
            // TODO: Send OTP through email/SMS
            return "OTP sent successfully";
        }

        // ---------------- RESET PASSWORD ----------------
        public async Task<string> ResetPasswordAsync(ResetPasswordDto dto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == dto.EmailOrMobile);

            if (user == null)
                return "User not found";

            // TODO: Validate OTP from DB later
            // For now, assume OTP is correct

            user.Password = dto.NewPassword; // TODO: hash later
            await _context.SaveChangesAsync();

            return "Password reset successful";
        }
    }
}
