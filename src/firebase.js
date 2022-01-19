// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZEYTAtg803thWK_qjt7G45fIHmsFiIOQ",
  authDomain: "stackoverflow-8dd61.firebaseapp.com",
  projectId: "stackoverflow-8dd61",
  storageBucket: "stackoverflow-8dd61.appspot.com",
  messagingSenderId: "392859814764",
  appId: "1:392859814764:web:ec07b05063a2e19b2f0149",
  measurementId: "G-Q9KFN59HTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider=new GoogleAuthProvider();