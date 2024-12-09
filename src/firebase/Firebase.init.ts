// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhTk4GqRicxiKAI_BHgB5HHM3V6JYfL7E",
  authDomain: "f-auth-d1816.firebaseapp.com",
  projectId: "f-auth-d1816",
  storageBucket: "f-auth-d1816.firebasestorage.app",
  messagingSenderId: "467329248564",
  appId: "1:467329248564:web:5d0848d1a9a33ccee5c961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};