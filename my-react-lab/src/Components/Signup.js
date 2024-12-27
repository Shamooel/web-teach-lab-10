import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(
      `First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Email: ${formData.email}, Password: ${formData.password}`
    );
  };

  return (
    <div className="create-account-container">
      <h1>Create an account</h1>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          className="form-input"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          className="form-input"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="form-input"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">
          <span>→</span> Login
        </button>
      </form>

      <div className="additional-links">
        <p>
          Already have an account?{" "}
          <a href="/login" className="login-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

