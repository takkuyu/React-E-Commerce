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

export const addPurchasedItemsToUser = async (uid, purchasedItems) => {
  if (!uid) return;

  const userRef = firestore.doc(`users/${uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      const updatedItems = snapShot.data().purchasedItems;

      for (let i = 0; i < purchasedItems.length; i++) {
        updatedItems.push(purchasedItems[i])
      }

      await userRef.update({
        purchasedItems: updatedItems,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

};

export const createUserProfileDocument = async (userAuth, displayName) => {
  if (!userAuth) return; // When a user isn't signin

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) { // when the user does not exist
    try {
      await userRef.set({ //Create a new user collection
        displayName: displayName,
        email: userAuth.email,
        createdAt: new Date(),
        purchasedItems: [],
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef)

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })

  return await batch.commit();
}

function convertTitleToRoute(title) {
  return title.replace(/\s+/g, "").toLowerCase();
}

export const convertCollectionsSnapshotToMap = collections => (
  collections.docs.map(doc => {
    const { title, items, summary, imageUrl } = doc.data();

    return {
      id: doc.id,
      routeName: convertTitleToRoute(title),
      title,
      items,
      summary,
      imageUrl
    }
  })
);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;