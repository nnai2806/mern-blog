// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9111c.firebaseapp.com",
  projectId: "mern-blog-9111c",
  storageBucket: "mern-blog-9111c.appspot.com",
  messagingSenderId: "812036596576",
  appId: "1:812036596576:web:e29e4a112b0d4e9457b405",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
