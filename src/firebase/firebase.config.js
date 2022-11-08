// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmPW5FNWQ1UXbAkJgfC5xQAJEkT9VL6oE",
  authDomain: "attorna-law.firebaseapp.com",
  projectId: "attorna-law",
  storageBucket: "attorna-law.appspot.com",
  messagingSenderId: "1047516286645",
  appId: "1:1047516286645:web:944000cec2fb0d305af8fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;