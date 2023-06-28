// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtMUASGZ4h4BcH8Iuv4N9Dr4GLS1zGLOc",
  authDomain: "auditions-463fd.firebaseapp.com",
  projectId: "auditions-463fd",
  storageBucket: "auditions-463fd.appspot.com",
  messagingSenderId: "785536910888",
  appId: "1:785536910888:web:a8b202088e7f970d0a171d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
