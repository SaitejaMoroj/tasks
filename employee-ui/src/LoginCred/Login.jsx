import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Employee.png";
import "../styles/login.css";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      console.log("Login Success:", response.data);

      /*
        Backend returns:
        {
          id,
          fullName,
          email
        }
      */

      // Save logged in user details
      localStorage.setItem("user", JSON.stringify(response.data));

      // If later you add JWT token, store it like this:
      // localStorage.setItem("token", response.data.token);

      // Redirect to Dashboard
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Logo Area */}
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="Quadrant Employee Portal"
            className="login-logo"
          />
        </div>

        {/* Title */}
        <h2 className="login-title">Quadrant Employee Portal</h2>
        <p className="login-subtitle">
          Secure access for authorized employees only
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center text-sm mb-2">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

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

          {/* Remember & Forgot */}
          <div className="login-row">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-blue-700"
              />
              Remember me
            </label>

            <Link to="/forgot" className="login-link">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Create Account */}
          <p className="create-account">
            New to Quadrant?{" "}
            <Link to="/signup" className="login-link font-semibold">
              Create an account
            </Link>
          </p>
        </form>

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

export default Login;
