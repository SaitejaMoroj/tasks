import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Employee.png";
import "../styles/login.css";
import api from "../api/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!form.agree) {
      setError("You must agree to the Terms & Conditions");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        fullName: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await api.post("/auth/signup", payload);

      console.log("Signup Success:", response.data);

      alert("Account created successfully! Please login.");

      // After successful signup, redirect to Login page
      navigate("/");

    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="Quadrant Employee Portal"
            className="login-logo"
          />
        </div>

        {/* Title */}
        <h2 className="login-title">Create Your Account</h2>
        <p className="login-subtitle">
          Join Quadrant Employee Portal to access enterprise services
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center text-sm mb-2">
            {error}
          </p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="login-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="login-input"
            />
          </div>

          {/* Email */}
          <div>
            <label className="login-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="employee@quadrant.com"
              className="login-input"
            />
          </div>

          {/* Password */}
          <div>
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="login-input"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="login-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="login-input"
            />
          </div>

          {/* Terms */}
          <div className="login-row">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="accent-blue-700"
              />
              I agree to the Terms & Conditions
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Switch to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/" className="login-link">
              Sign In
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p className="brand-text">
            © 2026 QuadrantEmployeePortal. All rights reserved.
          </p>
          <p className="version-text">
            Version 1.0.0 | Secure Enterprise Authentication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
