
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCO8gECwLooJzaqvyTl79jh5dfePCATaHw",
    authDomain: "class-practice-d67be.firebaseapp.com",
    projectId: "class-practice-d67be",
    storageBucket: "class-practice-d67be.firebasestorage.app",
    messagingSenderId: "977719534307",
    appId: "1:977719534307:web:0d400164e9303f8f5d1bd6",
    measurementId: "G-688XVJV4GF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, deleteDoc, setDoc };
