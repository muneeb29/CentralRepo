import firebase from "firebase/app";
import "firebase/auth";
import "firsbase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAArLAnl19uLtWbRz8NBYZXwXTRuQZrbDM",
    authDomain: "cardiomyopathy-2362a.firebaseapp.com",
    projectId: "cardiomyopathy-2362a",
    storageBucket: "cardiomyopathy-2362a.appspot.com",
    messagingSenderId: "126392084047",
    appId: "1:126392084047:web:3d20020f6f04d5eb82ec3a"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication , firebaseFireStore};