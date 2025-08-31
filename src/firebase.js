// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_dBULOI96MN3aD2Jp385MLjOuNF8KB18",
  authDomain: "mandi-57b67.firebaseapp.com",
  projectId: "mandi-57b67",
  storageBucket: "mandi-57b67.firebasestorage.app",
  messagingSenderId: "981154153744",
  appId: "1:981154153744:web:3d345774773e70d8c01195",
  measurementId: "G-D9W0E20PQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);