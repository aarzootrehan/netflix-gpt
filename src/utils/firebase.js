
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcLs0WzDS9dApLueAo1WzqJV-jkOGIIxs",
  authDomain: "netflix-gpt-fc6a4.firebaseapp.com",
  projectId: "netflix-gpt-fc6a4",
  storageBucket: "netflix-gpt-fc6a4.firebasestorage.app",
  messagingSenderId: "494986419959",
  appId: "1:494986419959:web:665fbcbf16bb1b87937df2",
  measurementId: "G-NFLX8LZC2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();