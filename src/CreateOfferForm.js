import React, { useState } from 'react';
import './CreateOfferForm.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function CreateOfferForm({ onCancel }) {
  const [offerName, setOfferName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFilename, setImageFilename] = useState('');

  const handleSave = async () => {
    if (!offerName || !price) {
      alert('Please fill in at least the Offer Name and Price.');
      return;
    }
    try {
      await addDoc(collection(db, 'offers'), {
        name: offerName,
        description: description,
        price: Number(price),
        image: imageFilename,
        createdAt: new Date()
      });
      console.log('Offer saved successfully!');
      onCancel();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to save offer. Please try again.');
    }
  };

  return (
    <div className="form-modal-backdrop">
      <div className="form-modal-content">
        <h2>Create a New Upsell Offer</h2>
        <div className="form-group">
          <label htmlFor="offerName">Offer Name</label>
          <input id="offerName" type="text" placeholder="e.g., Airport Transfer" value={offerName} onChange={e => setOfferName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="imageFilename">Image Filename</label>
          <input id="imageFilename" type="text" placeholder="e.g., spa.jpg (must be in src/images)" value={imageFilename} onChange={e => setImageFilename(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="3" placeholder="Describe the offer for the guest" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (in ₹)</label>
          <input id="price" type="number" placeholder="e.g., 1200" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="form-actions">
          <button onClick={onCancel} className="cancel-button">Cancel</button>
          <button onClick={handleSave} className="save-button">Save Offer</button>
        </div>
      </div>
    </div>
  );
}

export default CreateOfferForm;