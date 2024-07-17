// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArk-lMAAHezsCXvM_zCzcx9ByHj8pauO4",
  authDomain: "netflix-gpt-17.firebaseapp.com",
  projectId: "netflix-gpt-17",
  storageBucket: "netflix-gpt-17.appspot.com",
  messagingSenderId: "616487373582",
  appId: "1:616487373582:web:ae95aee99826b14d6ce55f",
  measurementId: "G-YZKDE6J1B6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
