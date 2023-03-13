// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82YpWkcsonhrO0mQYb6tTHduVCZX4H4U",
  authDomain: "waldo-d5e4e.firebaseapp.com",
  projectId: "waldo-d5e4e",
  storageBucket: "waldo-d5e4e.appspot.com",
  messagingSenderId: "577034077806",
  appId: "1:577034077806:web:b17ce3f0e984872c37887f",
  measurementId: "G-FMYKM51LWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
