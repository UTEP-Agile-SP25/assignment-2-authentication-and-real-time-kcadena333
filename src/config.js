// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2icDxKsPtGAGY1lRYMSAroLKFvtVDZPA",
  authDomain: "cadena-sandbox.firebaseapp.com",
  projectId: "cadena-sandbox",
  storageBucket: "cadena-sandbox.firebasestorage.app",
  messagingSenderId: "1004822343987",
  appId: "1:1004822343987:web:703f65b96699fe5730ce46",
  measurementId: "G-JV1VWSCEEK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
