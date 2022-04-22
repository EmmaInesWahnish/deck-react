// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbHbFVTPReq7Xv63r8DzNiXNHi7uQmzD8",
  authDomain: "deck-react.firebaseapp.com",
  projectId: "deck-react",
  storageBucket: "deck-react.appspot.com",
  messagingSenderId: "1019660936735",
  appId: "1:1019660936735:web:d46bd0e5f6706a9f66972a",
  measurementId: "G-7QPWH9RLPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default getFirestore();