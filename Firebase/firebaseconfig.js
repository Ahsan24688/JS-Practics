
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAhIAwYjr3MFsSUIQx_W8WK2ASXVGwhSdY",
    authDomain: "dummy-practice-c350a.firebaseapp.com",
    projectId: "dummy-practice-c350a",
    storageBucket: "dummy-practice-c350a.firebasestorage.app",
    messagingSenderId: "979881676311",
    appId: "1:979881676311:web:1214edf9c8a540e3d31652",
    measurementId: "G-E5D47EB1XS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };