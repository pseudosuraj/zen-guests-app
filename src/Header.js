import React from 'react';
import './Header.css';
import logo from './images/logo.png'; // We import the logo image

function Header() {
  return (
    <header className="dashboard-header">
      <div className="logo-section">
        {/* We now use an image tag for the logo */}
        <img src={logo} alt="Zen-Guests Logo" className="logo-image" />
      </div>
      <div className="title-section">
        <h1>Hotel Dashboard</h1>
      </div>
      <div className="user-section">
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Header;