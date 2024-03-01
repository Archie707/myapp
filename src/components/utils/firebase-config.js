import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu-ChZUECubdVF_dCfyCKbWPjFXauG9KU",
  authDomain: "mckwak-db2f8.firebaseapp.com",
  databaseURL: "https://mckwak-db2f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mckwak-db2f8",
  storageBucket: "mckwak-db2f8.appspot.com",
  messagingSenderId: "52415096875",
  appId: "1:52415096875:web:7f6ce974261fa8b57de26e",
  measurementId: "G-04W08PW2H9"
};

const app = initializeApp(firebaseConfig);

// Optionally, initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db, analytics };

