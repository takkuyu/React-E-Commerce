import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnaxq30dRcukvWOjz6JKafLgmuB2fLYz8",
    authDomain: "react-e-commerce-4d0b8.firebaseapp.com",
    databaseURL: "https://react-e-commerce-4d0b8.firebaseio.com",
    projectId: "react-e-commerce-4d0b8",
    storageBucket: "react-e-commerce-4d0b8.appspot.com",
    messagingSenderId: "417181246577",
    appId: "1:417181246577:web:ace0bcf011a6850d6667d0",
    measurementId: "G-S2KJJ0HSJX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;