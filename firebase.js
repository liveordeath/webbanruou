// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "webbanruou.firebaseapp.com",
    projectId: "webbanruou",
    storageBucket: "webbanruou.appspot.com",
    messagingSenderId: "854839749214",
    appId: "1:854839749214:web:2e8733fd21704ef222e2cf",
    measurementId: "G-7KJ8QW1KXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);