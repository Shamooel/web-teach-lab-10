import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); 
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Customer Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">
          <span>→</span> Login
        </button>
      </form>

      <div className="additional-links">
        <a href="/forgot-password" className="forgot-password-link">Forgot your password?</a>
        <p>
          Don't have an account? <a href="/signup" className="signup-link">Sign Up!</a>
        </p>
      </div>
    </div>
  );
}

export default Login;


