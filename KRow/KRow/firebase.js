// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKUNV1-Em07B2A1egfNDa7UntqzwM17MQ",
  authDomain: "krow-75eab.firebaseapp.com",
  projectId: "krow-75eab",
  storageBucket: "krow-75eab.appspot.com",
  messagingSenderId: "200922467589",
  appId: "1:200922467589:web:b4034dfbca6d03c98f7b6c",
  measurementId: "G-79B90G763C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};