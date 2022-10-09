// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCON_lVydtjZVAsC7Qff3KXVLe_vHC0oWI",
  authDomain: "malkiasms.firebaseapp.com",
  projectId: "malkiasms",
  storageBucket: "malkiasms.appspot.com",
  messagingSenderId: "887617702930",
  appId: "1:887617702930:web:9364cf9764c0d382741ccb",
  measurementId: "G-343RB2JCKV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);
