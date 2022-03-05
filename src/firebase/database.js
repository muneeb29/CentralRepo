// extracting functions from the firebase library
// in different categories like auth, firestore and storage
import { initializeApp, FirebaseError } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  where,
  query,
  orderBy,
  doc,
  Timestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

//add firebaseConfig

const firebaseConfig = {
  apiKey: "AIzaSyD2CujV1B8NXZeAXV1BYkPVFg9qepcKumU",
  authDomain: "cardiomyopathy-f93f7.firebaseapp.com",
  databaseURL: "https://cardiomyopathy-f93f7-default-rtdb.firebaseio.com",
  projectId: "cardiomyopathy-f93f7",
  storageBucket: "cardiomyopathy-f93f7.appspot.com",
  messagingSenderId: "491841001479",
  appId: "1:491841001479:web:cd8837fd501db5380c72a2",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// setting a reference to the users collection
// that will be created when you register users
const usersCollection = collection(db, "users");

// setting a reference to the contact collection
// that will have the documents of the messages that users send
const contactCollection = collection(db, "contact");

// exporting functions to use them in other components
export {
  app,
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  db,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  doc,
  Timestamp,
  where,
  query,
  orderBy,
  collection,
  getDocs,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  signOut,
  FirebaseError,
  sendPasswordResetEmail,
  usersCollection,
  contactCollection,
};
