import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBoXYrg9IRNzuxhYmMxhGJAddYNxyK9fH0",
  authDomain: "canteen-management-site.firebaseapp.com",
  projectId: "canteen-management-site",
  storageBucket: "canteen-management-site.appspot.com",
  messagingSenderId: "227011002118",
  appId: "1:227011002118:web:d4e3d91cc2d835e13b2887",
  measurementId: "G-54DLCESF3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getAuth(app);
const db = getFirestore(app);
export {
  db,
  database,
}