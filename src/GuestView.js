import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // Step 1: Import the hook for reading URL params
import './GuestView.css';
import { db } from './firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// We can keep the image imports and map from our last step
import spaImage from './images/spa.jpg';
import diningImage from './images/dining.jpg';
import transferImage from './images/transfer.jpg';
import defaultImage from './images/default.jpg';

const imageMap = {
  'spa.jpg': spaImage,
  'dining.jpg': diningImage,
  'transfer.jpg': transferImage
};

function GuestView() {
  const [offers, setOffers] = useState([]);
  // Step 2: Use the hook to get access to the URL search params
  const [searchParams] = useSearchParams();
  // Step 3: Get the value of the 'room' parameter from the URL
  const roomNumber = searchParams.get('room');

  useEffect(() => {
    const q = query(collection(db, "offers"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const offersData = [];
      querySnapshot.forEach((doc) => {
        offersData.push({ ...doc.data(), id: doc.id });
      });
      setOffers(offersData);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectOffer = (selectedOffer) => {
    // We can even include the room number in the alert now!
    alert(`Room ${roomNumber} has selected: ${selectedOffer.name}\nPrice: ₹${selectedOffer.price}`);
    console.log(`Room ${roomNumber} selected offer:`, selectedOffer);
  };

  return (
    <div className="guest-view-container">
      <header className="guest-header">
        {/* Step 4: Display the room number in the welcome message */}
        <h1>Welcome, Room {roomNumber || 'Guest'}</h1>
        <p>Enhance your stay with our exclusive offers.</p>
      </header>
      <main className="guest-offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="guest-offer-card">
            <img 
              src={imageMap[offer.image] || defaultImage} 
              alt={offer.name} 
              className="offer-image" 
            />
            <div className="offer-text-content">
              <h3>{offer.name}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="card-footer">
                <span className="offer-price">₹{offer.price}</span>
                <button onClick={() => handleSelectOffer(offer)} className="select-button">Add to My Stay</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default GuestView;