using System;

namespace EmployeeApi.Entities
{
    public class Employee
    {
        public int Id { get; set; }

        public required string FirstName { get; set; }
        public required string LastName { get; set; }

        public string Email { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;

        public decimal Salary { get; set; }
        public DateTime DateOfJoining { get; set; } = DateTime.UtcNow;
        public bool IsActive { get; set; } = true;

        // Computed property
        public string FullName => $"{FirstName} {LastName}";
    }
}
