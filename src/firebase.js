import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuiSvKEZC8ZJSm0PsPqP8lyy9gxtGd-Ao",
  authDomain: "glow-up-f3302.firebaseapp.com",
  projectId: "glow-up-f3302",
  storageBucket: "glow-up-f3302.firebasestorage.app",
  messagingSenderId: "851084452261",
  appId: "1:851084452261:web:d39c1a52af1823f937884c",
  measurementId: "G-FNLQDS97RG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
