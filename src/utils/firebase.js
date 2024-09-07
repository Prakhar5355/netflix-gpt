// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5oeUYUbsYgVzoOJPQB6UYIBsUT_XkCqk",
  authDomain: "netflixgpt-ed8d5.firebaseapp.com",
  projectId: "netflixgpt-ed8d5",
  storageBucket: "netflixgpt-ed8d5.appspot.com",
  messagingSenderId: "349496860958",
  appId: "1:349496860958:web:4efc00d64c8a235bf3a90f",
  measurementId: "G-NHEZDFBGR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();