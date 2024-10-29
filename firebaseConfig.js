// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBlJ3CI9hbC-agY2cB82NKwnprl-r__hsI",
  authDomain: "findbook-fc8d0.firebaseapp.com",
  projectId: "findbook-fc8d0",
  storageBucket: "findbook-fc8d0.appspot.com",
  messagingSenderId: "251807461969",
  appId: "1:251807461969:web:2ffad2410e6a0a9377be70",
  measurementId: "G-75LXPKBQHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { app, auth }; 