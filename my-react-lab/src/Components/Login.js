import React, { useState } from 'react';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Customer Login</h1>
      <form className="login-form" onSubmit={Login}>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="email" className="form-label">password</label>
        <input
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

