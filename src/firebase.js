// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace this with your own unique firebaseConfig object from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCNNAmx1HU0yATG76xE_E7H_k5_PGqBvek",
  authDomain: "zen-guests-dashboard.firebaseapp.com",
  projectId: "zen-guests-dashboard",
  storageBucket: "zen-guests-dashboard.firebasestorage.app",
  messagingSenderId: "81235771661",
  appId: "1:81235771661:web:b6230b24113eee7d497044",
  measurementId: "G-CX8DPD3RBB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it so other files can use it
const db = getFirestore(app);

export { db };