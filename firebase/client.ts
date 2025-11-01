import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG172-_-d9f0VJYgkES2L0-eXpsHivJmA",
    authDomain: "prepwise-b863f.firebaseapp.com",
    projectId: "prepwise-b863f",
    storageBucket: "prepwise-b863f.firebasestorage.app",
    messagingSenderId: "540026360933",
    appId: "1:540026360933:web:6c3a71756265eb5822228c",
    measurementId: "G-15YXTF75HW"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);