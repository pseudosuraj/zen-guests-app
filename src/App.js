import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard.js';
import GuestView from './GuestView.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route 1: The home page at the '/' path */}
          <Route path="/" element={<HomePage />} />

          {/* Route 2: The dashboard at the '/dashboard' path */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Route 3: The guest view at the '/guest' path */}
          <Route path="/guest" element={<GuestView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;