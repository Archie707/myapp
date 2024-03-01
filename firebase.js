import firebase from 'firebase/app';
import 'firebase/firestore';

const firebase = {
  apiKey: "AIzaSyDu-ChZUECubdVF_dCfyCKbWPjFXauG9KU",
  authDomain: "mckwak-db2f8.firebaseapp.com",
  databaseURL: "https://mckwak-db2f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mckwak-db2f8",
  storageBucket: "mckwak-db2f8.appspot.com",
  messagingSenderId: "52415096875",
  appId: "1:52415096875:web:7f6ce974261fa8b57de26e",
  measurementId: "G-04W08PW2H9"
};

firebase.initializeApp(firebase);
export const db = firebase.firestore();