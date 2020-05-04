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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // When a user isn't signin
    
  const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const userRef = userAuth;
    
  const snapShot = await userRef.get();
//   console.log(userAuth)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //Create a new user collection
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;