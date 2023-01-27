// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz-8w_9-_1de0PgGTe44WqMDxYB4-NJmQ",
    authDomain: "best-eats-react.firebaseapp.com",
    projectId: "best-eats-react",
    storageBucket: "best-eats-react.appspot.com",
    messagingSenderId: "850288168992",
    appId: "1:850288168992:web:6a48bc2146a28cf5432c45"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)