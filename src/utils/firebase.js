// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBA2Vzu3zokMDDjnSwhkL5jAvsRGPHIE0c",
  authDomain: "tic-tak-toe-bebfa.firebaseapp.com",
  projectId: "tic-tak-toe-bebfa",
  storageBucket: "tic-tak-toe-bebfa.appspot.com",
  messagingSenderId: "507131440265",
  appId: "1:507131440265:web:b8334792a362e5c9efea58",
  measurementId: "G-TXLHRW1REB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export {db, provider, analytics}