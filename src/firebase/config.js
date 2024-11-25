// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSVEwv1US2mx-bLOtFiGaht1szPcD-ZsE",
  authDomain: "blog-54eb3.firebaseapp.com",
  projectId: "blog-54eb3",
  storageBucket: "blog-54eb3.firebasestorage.app",
  messagingSenderId: "56052266154",
  appId: "1:56052266154:web:8ade4fc60ce54b0b6c4cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;