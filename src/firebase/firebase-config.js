import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase Configuration for my webbApp
const firebaseConfig = {
    apiKey: "AIzaSyAEEumQd4DqEAlyx0-ENCg3DKRKA1lid_8",
    authDomain: "react-journalapp-12c85.firebaseapp.com",
    projectId: "react-journalapp-12c85",
    storageBucket: "react-journalapp-12c85.appspot.com",
    messagingSenderId: "537217383628",
    appId: "1:537217383628:web:63b848c4f42539e6325669"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}