import React, { useState } from 'react';


function Signup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const Submit = () => {
    alert(`Email: ${email}, Password: ${password}, FirstName: ${firstName},  LastName: ${lastName}`);
  };

  return (
    <div className="create-account-container">
      <h1>Create an account</h1>
      <form className="create-account-form" onSubmit={Submit}>
        <label htmlFor="firstName" className="form-label">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className="form-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
         
        />

        <label htmlFor="lastName" className="form-label">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}   
        />

        <button type="submit" className="signup-button">
            <span>→</span> login
        </button>
      </form>

      <div className="additional-links">
        <p>
          Already have an account? <a href="/login" className="login-link">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
