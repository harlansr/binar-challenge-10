// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxLm9FryhywjMtn_3XDJc92xhOi7ZTRo",
  authDomain: "fb-platinum-echamp.firebaseapp.com",
  projectId: "fb-platinum-echamp",
  storageBucket: "fb-platinum-echamp.appspot.com",
  messagingSenderId: "549326499769",
  appId: "1:549326499769:web:438f2ebc67d2b6af591068",
  databaseURL:
    "https://fb-platinum-echamp-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
