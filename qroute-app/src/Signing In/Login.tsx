import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  goToCreate?: () => void;
  goToForgotPassword?: () => void; // Idinagdag para ma-connect ang Forgot Password page
}

export const Login: React.FC<LoginProps> = ({ goToCreate, goToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="page-frame">
      <div className="outer-border-box">
        {/* Top Left Logo */}
        <div className="logo">LOGO</div>

        {/* Main Centered Card Container */}
        <div className="form-card">
          <h1 className="title">WELCOME</h1>
          <p className="subtitle">Log in your Account</p>

          <form className="form-body" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="pill-input-group">
              <label htmlFor="email" className="input-label-bold">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="clean-input"
              />
            </div>

            {/* Password Field (Pill Input Box) */}
            <div className="pill-input-group">
              <label htmlFor="password" className="input-label-bold">
                Password:
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="clean-input"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                title="Toggle visibility"
              >
                👁
              </span>
            </div>

            {/* Remember me & Forgot Password Row */}
            <div className="options-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              
              {/* Clickable button na mukhang link para sa Forgot Password */}
              <button
                type="button"
                onClick={goToForgotPassword}
                className="forgot-link-btn"
              >
                Forgot Password
              </button>
            </div>

            {/* Login Button */}
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>

          {/* Footer Link */}
          <p className="footer-text">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={goToCreate}
              className="login-link-btn"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;