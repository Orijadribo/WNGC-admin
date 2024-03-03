// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHf5i9oPOE8k152fs5P1JjXAaHfKv1glM',
  authDomain: 'wngc-scores.firebaseapp.com',
  projectId: 'wngc-scores',
  storageBucket: 'wngc-scores.appspot.com',
  messagingSenderId: '990005449038',
  appId: '1:990005449038:web:f77ac89cee94a6e421ce1f',
  measurementId: 'G-ZCWR9BZLNR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
