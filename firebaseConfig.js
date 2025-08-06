// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QaIh5VZMNH_JJ6_IyOsrahlplKXRFwo",
  authDomain: "kuresia-site.firebaseapp.com",
  projectId: "kuresia-site",
  storageBucket: "kuresia-site.firebasestorage.app",
  messagingSenderId: "235730327677",
  appId: "1:235730327677:web:a80f2578a0ee28e6973914",
  measurementId: "G-JLNX851VWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);