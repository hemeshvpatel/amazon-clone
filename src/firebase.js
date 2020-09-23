import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCw0EOoJz3CiknT6GwLNpcALcqHI96M4xc",
  authDomain: "clone-be1ec.firebaseapp.com",
  databaseURL: "https://clone-be1ec.firebaseio.com",
  projectId: "clone-be1ec",
  storageBucket: "clone-be1ec.appspot.com",
  messagingSenderId: "368448959452",
  appId: "1:368448959452:web:b6a0a7b46ceab9890d9519",
  measurementId: "G-Z3WZRWZT12",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
