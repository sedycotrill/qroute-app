import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  goToCreate?: () => void;
  goToForgotPassword?: () => void;
  goToLanding?: () => void;
}

export const Login: React.FC<LoginProps> = ({ goToCreate, goToForgotPassword, goToLanding }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goToLanding) {
      goToLanding();
    }
  };

  return (
    <div className="page-frame">
      <div className="outer-border-box">
        <div className="logo">LOGO</div>

        <div className="form-card">
          <h1 className="title">WELCOME</h1>
          <p className="subtitle">Log in your Account</p>

          <form className="form-body" onSubmit={handleSubmit}>
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

            <div className="options-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={goToForgotPassword}
                className="forgot-link-btn"
              >
                Forgot Password
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Login
            </button>

            <div className="divider-container">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              <svg className="google-icon" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Sign In with Google
            </button>
          </form>

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
}

export default Login;
