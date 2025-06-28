import React from 'react';
import './Metrics.css';

function Metrics() {
  return (
    <div className="metrics-container">
      <h3>Today's Performance</h3>
      <div className="metric-card">
        <span className="metric-value">₹4,550</span>
        <span className="metric-label">Total Upsell Revenue</span>
      </div>
      <div className="metric-card">
        <span className="metric-value">12</span>
        <span className="metric-label">Total Orders</span>
      </div>
      <div className="metric-card">
        <span className="metric-value">Airport Transfer</span>
        <span className="metric-label">Most Popular Offer</span>
      </div>
    </div>
  );
}

export default Metrics;