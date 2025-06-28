import React from 'react';
import './OffersList.css';

// This component now receives a function called 'onDeleteOffer'
function OffersList({ offers, onDeleteOffer }) {
  return (
    <div className="offers-list-container">
      <h3>Available Offers</h3>
      <div className="offer-list">
        {/* If there are no offers, show a message */}
        {offers.length === 0 && <p className="no-offers-message">No offers created yet. Click "+ Create New Offer" to begin.</p>}

        {/* We map over the offers and now include a delete button */}
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <span className="offer-name">{offer.name}</span>
            <div className="offer-details">
              <span className="offer-price">₹{offer.price}</span>
              {/* When this button is clicked, it calls the onDeleteOffer function with the offer's unique ID */}
              <button onClick={() => onDeleteOffer(offer.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersList;