// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAttBlhFjBKunc_OM_dHJuAFhZSe7DRrY",
  authDomain: "react-firebase-datagrokr.firebaseapp.com",
  projectId: "react-firebase-datagrokr",
  storageBucket: "react-firebase-datagrokr.appspot.com",
  messagingSenderId: "961111588638",
  appId: "1:961111588638:web:78adf0182a7da992a4d30f",
  measurementId: "G-PFLSWNP95V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
