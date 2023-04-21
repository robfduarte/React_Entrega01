import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBUVuFScRENjuHF1wZqQfr9J7B2tMFlJEU",
  authDomain: "backend51150-d8c16.firebaseapp.com",
  projectId: "backend51150-d8c16",
  storageBucket: "backend51150-d8c16.appspot.com",
  messagingSenderId: "531387617457",
  appId: "1:531387617457:web:7718d7fab0a702833b1290"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);