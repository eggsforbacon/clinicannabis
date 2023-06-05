// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore} from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQRmqGq7nbAqvV8s0J0graf52tGog7_MU",
    authDomain: "clinicannabis-mbt.firebaseapp.com",
    projectId: "clinicannabis-mbt",
    storageBucket: "clinicannabis-mbt.appspot.com",
    messagingSenderId: "295156941314",
    appId: "1:295156941314:web:640a76817e49cce33b5d1b",
    measurementId: "G-3J2GHYJD7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);