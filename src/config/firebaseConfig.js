// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_AwyYbIVw-SlQ5wA7yDxz3f8LDHZccCs",
  authDomain: "fir-dos-64d9d.firebaseapp.com",
  projectId: "fir-dos-64d9d",
  storageBucket: "fir-dos-64d9d.appspot.com",
  messagingSenderId: "858147291607",
  appId: "1:858147291607:web:bc7fd6d80ae4fc57584b92"
};
  
export const app = initializeApp(firebaseConfig);
export default app;

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


// Initialize Firebase
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};