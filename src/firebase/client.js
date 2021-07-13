import firebase from "firebase/app";
import "@firebase/firestore"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBfB-UjMJkrsUwf7Qoj9gOhKk2MI8eXyxM",
  authDomain: "burguereact-store.firebaseapp.com",
  projectId: "burguereact-store",
  storageBucket: "burguereact-store.appspot.com",
  messagingSenderId: "1067918913192",
  appId: "1:1067918913192:web:ef9c516de2495c24bd9c9d",
});

// Initialize Firebase
export const getFirebase = () => {
  return firebaseConfig
};

// Funciones de Firebase
export const getFirestore = () => {
    return firebase.firestore(firebaseConfig)
}