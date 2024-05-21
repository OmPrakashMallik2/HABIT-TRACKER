import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArReUREJWaws5_e88qUnJwwn0Me3OcMDA",
  authDomain: "project1-opm.firebaseapp.com",
  projectId: "project1-opm",
  storageBucket: "project1-opm.appspot.com",
  messagingSenderId: "36458391533",
  appId: "1:36458391533:web:1e4b6ac66665cdc48569e4",
  measurementId: "G-S4EPMKDHRE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);