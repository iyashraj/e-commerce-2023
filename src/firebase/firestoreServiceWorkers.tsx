// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6fmqZ1W0GbN6dnLg7iN--UMeqItlpaDQ",
  authDomain: "eyug-commerce.firebaseapp.com",
  projectId: "eyug-commerce",
  storageBucket: "eyug-commerce.appspot.com",
  messagingSenderId: "275891062716",
  appId: "1:275891062716:web:90493c0bbdc9266b3e4db9",
  measurementId: "G-MEBZQX1BYY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)