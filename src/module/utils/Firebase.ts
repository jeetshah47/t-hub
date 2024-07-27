// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbPxBNmgQ4NfthpjIyqAHAtmI1aETp-IU",
  authDomain: "doorhub-2bd7c.firebaseapp.com",
  projectId: "doorhub-2bd7c",
  storageBucket: "doorhub-2bd7c.appspot.com",
  messagingSenderId: "566142120152",
  appId: "1:566142120152:web:f524add0cc9237ea8667ad",
  measurementId: "G-X9TVGB4R1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);