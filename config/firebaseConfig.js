// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFekXS1eOpMpz47LMLoC4soPttqTG2sUk",
  authDomain: "hiacego-a21ad.firebaseapp.com",
  databaseURL: "https://hiacego-a21ad-default-rtdb.firebaseio.com",
  projectId: "hiacego-a21ad",
  storageBucket: "hiacego-a21ad.appspot.com",
  messagingSenderId: "77857982331",
  appId: "1:77857982331:web:5fc364c58142314d8cdfde",
  measurementId: "G-3L0NPFWCLH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase();
