// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5pBz066hjeXELke66D5WfQmxvz7v_-gU",
    authDomain: "plantasia-8f567.firebaseapp.com",
    projectId: "plantasia-8f567",
    storageBucket: "plantasia-8f567.appspot.com",
    messagingSenderId: "380532500258",
    appId: "1:380532500258:web:888ceb9ca73b981781a77b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();