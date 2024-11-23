// src/pages/SignUp.js
import React, { useState } from 'react';
import './SignUp.css';  // Add the CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert('Registered Successfully!');
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Join Us</h1>
        <p>Sign up today to experience the best food journey with us!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="already-member">
          Already a member? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
