
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCSEOYDLdH28DznYTCCJUu6L8lkX3yMbIQ",
  authDomain: "auth-c3012.firebaseapp.com",
  projectId: "auth-c3012",
  storageBucket: "auth-c3012.appspot.com",
  messagingSenderId: "811175220871",
  appId: "1:811175220871:web:76d9e4fa896676a5be4a22",
  measurementId: "G-7QNT2HGH2G"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;

