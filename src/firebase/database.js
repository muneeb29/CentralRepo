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

//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// setting a reference to the users collection
// that will be created when you register users
const usersCollection = collection(db, "users");

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
  signOut,
  FirebaseError,
  sendPasswordResetEmail,
  usersCollection,
};
