import React from 'react';
import './ActionBar.css';

// Notice it now accepts a 'prop' called 'onCreateOfferClick'
function ActionBar({ onCreateOfferClick }) {
  return (
    <div className="action-bar">
      {/* We attach the function to the button's onClick event */}
      <button onClick={onCreateOfferClick} className="create-offer-button">
        + Create New Offer
      </button>
    </div>
  );
}

export default ActionBar;