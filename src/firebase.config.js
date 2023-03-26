// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60lqIV38tk7wCf1k3GsM9m5PpQaJIsZE",
  authDomain: "fir-899e2.firebaseapp.com",
  projectId: "fir-899e2",
  storageBucket: "fir-899e2.appspot.com",
  messagingSenderId: "306083583613",
  appId: "1:306083583613:web:523dd25a712dfa61918314",
  measurementId: "G-DTE576CFG1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
