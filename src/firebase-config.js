// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3UGO1770vpUKAXYRkVp9yVog8VHTTyQ",
  authDomain: "real-time-chat-573fc.firebaseapp.com",
  projectId: "real-time-chat-573fc",
  storageBucket: "real-time-chat-573fc.appspot.com",
  messagingSenderId: "221089100154",
  appId: "1:221089100154:web:a95891df7d593f0ed066c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)