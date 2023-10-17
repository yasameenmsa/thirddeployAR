// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItyX2aXgNd5Q4D_ue00igjqpOtj3fr2U",
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "arrealestateee.firebaseapp.com",
  projectId: "arrealestateee",
  storageBucket: "arrealestateee.appspot.com",
  messagingSenderId: "223064073717",
  appId: "1:223064073717:web:4e9b9c9fc8d881ad20acbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);