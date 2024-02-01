import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Button } from "react-scroll";

const firebaseConfig = {
    apiKey: "AIzaSyD8k9cfjheGHktq7daxNAqEiq7mR1p4zns",
    authDomain: "portfoliowb-3026c.firebaseapp.com",
    projectId: "portfoliowb-3026c",
    storageBucket: "portfoliowb-3026c.appspot.com",
    messagingSenderId: "83762096133",
    appId: "1:83762096133:web:e0ac8a97c6f3eeb782d46c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;