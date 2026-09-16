function Create({ goToLogin }: { goToLogin: () => void }) {
  return (
    <div className="create-container">
      <div className="logo">LOGO</div>
      <h1>WELCOME</h1>
      <p>Create your Account</p>

      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>

        <label>
          <input type="checkbox" /> I agree to the Terms and Conditions
        </label>

        <button type="submit" className="btn-primary">Sign Up</button>
      </form>

      <p className="footer-text">
        Already have an Account?{" "}
        <span onClick={goToLogin} className="link">Sign In</span>
      </p>
    </div>
  );
}

export default Create;
