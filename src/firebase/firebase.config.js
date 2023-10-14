// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDhWCrwQqtZgTrs3psSx3cFLmQo9psB4",
  authDomain: "coffee-store-d7f9f.firebaseapp.com",
  projectId: "coffee-store-d7f9f",
  storageBucket: "coffee-store-d7f9f.appspot.com",
  messagingSenderId: "65176348322",
  appId: "1:65176348322:web:62e544b8abcf0a108319fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;