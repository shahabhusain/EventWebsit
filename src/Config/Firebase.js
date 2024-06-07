import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBVG4YI0JsByI2hPWeQSIfsh5pBw0UNfIA",
  authDomain: "event-websit.firebaseapp.com",
  projectId: "event-websit",
  storageBucket: "event-websit.appspot.com",
  messagingSenderId: "335032158964",
  appId: "1:335032158964:web:2213999ec834c90d3caca1",
  measurementId: "G-6HVFGG5X8V"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }