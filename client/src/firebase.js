// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-99a3a.firebaseapp.com",
  projectId: "mern-blog-99a3a",
  storageBucket: "mern-blog-99a3a.appspot.com",
  messagingSenderId: "419987354330",
  appId: "1:419987354330:web:1040e4db5424aff439abe3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

