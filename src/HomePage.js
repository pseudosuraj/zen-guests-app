import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px'
  };

  const linkStyle = {
    fontSize: '24px',
    padding: '15px 30px',
    textDecoration: 'none',
    border: '2px solid #00796b',
    color: '#00796b',
    borderRadius: '8px',
    fontWeight: 'bold'
  };

  return (
    <div style={navStyle}>
      <h1>Zen-Guests App</h1>
      <Link to="/dashboard" style={linkStyle}>View Hotelier Dashboard</Link>
      <Link to="/guest" style={linkStyle}>View Guest Page</Link>
    </div>
  );
}

export default HomePage;