function Login({ goToCreate }: { goToCreate: () => void }) {
  return (
    <div className="login-container">
      <div className="logo">LOGO</div>
      <h1>WELCOME</h1>
      <p>Sign in your Account</p>

      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot">Forgot Password</a>
        </div>

        <button type="submit" className="btn-primary">Sign In</button>

        <div className="divider">or</div>

        <button type="button" className="btn-google">
          <span className="google-icon">G</span> Sign In with Google
        </button>
      </form>

      <p className="footer-text">
        Don’t have an account?{" "}
        <span onClick={goToCreate} className="link">Sign Up</span>
      </p>
    </div>
  );
}

export default Login;
