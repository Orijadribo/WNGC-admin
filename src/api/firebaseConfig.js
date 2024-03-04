import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHf5i9oPOE8k152fs5P1JjXAaHfKv1glM',
  authDomain: 'wngc-scores.firebaseapp.com',
  projectId: 'wngc-scores',
  storageBucket: 'wngc-scores.appspot.com',
  messagingSenderId: '990005449038',
  appId: '1:990005449038:web:f77ac89cee94a6e421ce1f',
  measurementId: 'G-ZCWR9BZLNR',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

