// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ifSYgL4Da87zw6xfn1kSvwhiRtc9G80",
  authDomain: "ecommerce-vega.firebaseapp.com",
  projectId: "ecommerce-vega",
  storageBucket: "ecommerce-vega.firebasestorage.app",
  messagingSenderId: "174908837499",
  appId: "1:174908837499:web:f8e059253ecf8307861cde",
  measurementId: "G-W4X08MTNMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
