// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export default firebase_app;

import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0gOXcJHbNq-yB7oU4OblTl1zrXndbkVI",
    authDomain: "test-auth-a7a83.firebaseapp.com",
    projectId: "test-auth-a7a83",
    storageBucket: "test-auth-a7a83.appspot.com",
    messagingSenderId: "655344564777",
    appId: "1:655344564777:web:7776c2d8fff8f1e838fa38",
    measurementId: "G-33GYJRECR6"
  
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export {app, auth}