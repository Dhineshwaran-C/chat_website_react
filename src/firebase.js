import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "dw-1-d2ad5.firebaseapp.com",
    projectId: "dw-1-d2ad5",
    storageBucket: "dw-1-d2ad5.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-P4DXRLLF6K"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


export {auth , googleProvider};

export default db;
