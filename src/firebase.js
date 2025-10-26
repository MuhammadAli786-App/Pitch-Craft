// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBYlzj8DP5ZbP7dpGayoTiU07rkJkRwYY8",
  authDomain: "pitch-craft-9af20.firebaseapp.com",
  projectId: "pitch-craft-9af20",
  storageBucket: "pitch-craft-9af20.firebasestorage.app",
  messagingSenderId: "576185761839",
  appId: "1:576185761839:web:b5e269d57ebc4e8e0906da"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
 export const auth = getAuth(app);
export const db = getFirestore(app);

