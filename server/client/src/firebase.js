// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-12742.firebaseapp.com",
  projectId: "blog-app-12742",
  storageBucket: "blog-app-12742.appspot.com",
  messagingSenderId: "989756073795",
  appId: "1:989756073795:web:4ddeb8325a950c93ed31f6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);