import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKxaGACMAhBQCXJxcdG6PCX-XNqkj73AE",
  authDomain: "bbc-clone-a71d4.firebaseapp.com",
  projectId: "bbc-clone-a71d4",
  storageBucket: "bbc-clone-a71d4.appspot.com",
  messagingSenderId: "319821684163",
  appId: "1:319821684163:web:81f42b9f7c848c704b3176"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)