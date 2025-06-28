import React from 'react';

function LoginPage() {
  return (
    <div className="login-container">
      <h2>Hotel Staff Login</h2>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <button className="login-button">Login</button>
    </div>
  );
}

export default LoginPage;