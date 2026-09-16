import React, { useState, useRef } from 'react';
import './Verify.css';

export interface VerifyProps {
  onVerify?: (code: string) => void;
  onResend?: () => void;
}

export const Verify: React.FC<VerifyProps> = ({ onVerify, onResend }) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onVerify) {
      onVerify(code.join(''));
    }
  };

  return (
    <div className="page-frame">
      <div className="outer-border-box">
        <div className="logo">LOGO</div>

        <div className="form-card">
          <h1 className="title">Verify your Account</h1>
          <p className="subtitle">Enter the verification code we just sent to your email.</p>

          <form className="form-body" onSubmit={handleSubmit}>
            <div className="otp-container">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el; // Inayos ang ref assignment callback
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otp-circle"
                />
              ))}
            </div>

            <p className="timer-text">Code expires in 02: 59</p>
            <p className="footer-text">
              If you didn’t receive a code.{' '}
              <button type="button" onClick={onResend} className="login-link-btn">
                Resend
              </button>
            </p>

            <button type="submit" className="submit-btn">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;