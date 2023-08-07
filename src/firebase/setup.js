import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDbbzVwmAV87tU5s-mhqUFTKyO2no_ih9E",
  authDomain: "dictionary-app-d66de.firebaseapp.com",
  projectId: "dictionary-app-d66de",
  storageBucket: "dictionary-app-d66de.appspot.com",
  messagingSenderId: "779541490572",
  appId: "1:779541490572:web:ac5f4add40c46ad64944a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()