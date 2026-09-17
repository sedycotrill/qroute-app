import React, { useState } from 'react';
import './Create.css';

interface CreateProps {
  goToLogin?: () => void;
  goToVerify?: () => void;
}

export const Create: React.FC<CreateProps> = ({ goToLogin, goToVerify }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goToVerify) {
      goToVerify();
    }
  };

  return (
    <div className="page-frame">
      <div className="outer-border-box">
        <div className="logo">LOGO</div>

        <div className="form-card">
          <h1 className="title">WELCOME</h1>
          <p className="subtitle">Create your Account</p>

          <form className="form-body" onSubmit={handleSubmit}>
            <div className="pill-input-group">
              <label htmlFor="name" className="input-label-bold">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="clean-input"
              />
            </div>

            <div className="pill-input-group">
              <label htmlFor="email" className="input-label-bold">Email:</label>
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
              <label htmlFor="password" className="input-label-bold">Password:</label>
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

            <button type="submit" className="submit-btn">
              Sign up
            </button>
          </form>

          <p className="footer-text">
            Already have an account?{' '}
            <button type="button" onClick={goToLogin} className="login-link-btn">
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;