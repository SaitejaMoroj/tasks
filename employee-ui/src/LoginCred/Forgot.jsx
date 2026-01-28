import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Employee.png";
import "../styles/login.css";
import api from "../api/axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // 1 = Email/Mobile
  // 2 = OTP
  // 3 = New Password
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    emailOrMobile: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // STEP 1 → Send OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/forgot", {
        emailOrMobile: form.emailOrMobile,
      });

      alert("OTP sent successfully!");
      setStep(2);
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP. User not found.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 → Just move to password reset (no real OTP validation yet)
  const verifyOtp = (e) => {
    e.preventDefault();

    if (!form.otp) {
      setError("Please enter OTP");
      return;
    }

    // Later we will validate OTP from DB
    alert("OTP verified successfully!");
    setStep(3);
  };

  // STEP 3 → Reset Password
  const resetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/reset", {
        emailOrMobile: form.emailOrMobile,
        otp: form.otp,
        newPassword: form.newPassword,
      });

      alert("Password reset successful! Redirecting to login...");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <div className="logo-wrapper">
          <img src={logo} alt="Quadrant Employee Portal" className="login-logo" />
        </div>

        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">
          Recover access to your Quadrant Employee Portal account
        </p>

        {error && (
          <p className="text-red-600 text-center text-sm mb-2">{error}</p>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={sendOtp} className="space-y-4">
            <div>
              <label className="login-label">Email or Mobile</label>
              <input
                type="text"
                name="emailOrMobile"
                value={form.emailOrMobile}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={verifyOtp} className="space-y-4">
            <div>
              <label className="login-label">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>

            <button type="submit" className="login-button">
              Verify OTP
            </button>
          </form>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form onSubmit={resetPassword} className="space-y-4">
            <div>
              <label className="login-label">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>

            <div>
              <label className="login-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="login-footer">
          <p className="brand-text">© 2026 QuadrantEmployeePortal</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
