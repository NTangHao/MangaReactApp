// Import the functions you need from the SDKs you need
import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCcsMG8vvER1YamMGhwdsb64avTXEPHclk",
    authDomain: "apptruyentranh-8117b.firebaseapp.com",
    databaseURL: "https://apptruyentranh-8117b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apptruyentranh-8117b",
    storageBucket: "apptruyentranh-8117b.appspot.com",
    messagingSenderId: "372298594056",
    appId: "1:372298594056:web:d044a99961d9b179ffdebd",
    measurementId: "G-03YGZ8ZSX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export {auth,app,database,storage};
