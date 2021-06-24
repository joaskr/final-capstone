import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAupnJS_tloecwbul0BLKwNFvu5Jj9QYwY",
  authDomain: "mom-and-pops.firebaseapp.com",
  projectId: "mom-and-pops",
  storageBucket: "mom-and-pops.appspot.com",
  messagingSenderId: "325206697258",
  appId: "1:325206697258:web:e195e895d053f382a06a53",
  measurementId: "G-53KGVZV0QT",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
