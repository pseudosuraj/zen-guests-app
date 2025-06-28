import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { db } from './firebase';
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import Header from './Header.js';
import ActionBar from './ActionBar.js';
import OffersList from './OffersList.js';
import Metrics from './Metrics.js';
import CreateOfferForm from './CreateOfferForm.js';

function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [offers, setOffers] = useState([]); // We move the offers state here

  // The useEffect hook now lives in the Dashboard, where it belongs
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

  const handleShowForm = () => setIsFormVisible(true);
  const handleHideForm = () => setIsFormVisible(false);

  // This is our new function to handle deleting an offer
  const handleDeleteOffer = async (offerId) => {
    // We ask for confirmation before deleting
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        // Create a reference to the specific document we want to delete
        const offerDocRef = doc(db, 'offers', offerId);
        // Call the deleteDoc function from Firebase
        await deleteDoc(offerDocRef);
        console.log("Offer deleted successfully!");
      } catch (error) {
        console.error("Error deleting offer: ", error);
        alert("Failed to delete offer. Please try again.");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <Header />
      <ActionBar onCreateOfferClick={handleShowForm} />
      <main className="dashboard-content">
        <div className="offers-list-section">
          {/* We now pass the offers data and the delete function down to the OffersList component */}
          <OffersList offers={offers} onDeleteOffer={handleDeleteOffer} />
        </div>
        <div className="metrics-section">
          <Metrics />
        </div>
      </main>
      {isFormVisible && <CreateOfferForm onCancel={handleHideForm} />}
    </div>
  );
}

export default Dashboard;