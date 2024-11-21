import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAL2aE3yPWkq597a94bby69VSMMHlOOi8Q",
  authDomain: "e-commerce-app-6955c.firebaseapp.com",
  databaseURL: "https://e-commerce-app-6955c.firebaseio.com",
  projectId: "e-commerce-app-6955c",
  storageBucket: "e-commerce-app-6955c.appspot.com",
  messagingSenderId: "1040698314680",
  appId: "1:1040698314680:web:3d8528233160feb342094d",
};

const firebaseApp = initializeApp(firebaseConfig);

// Firestore and Auth
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Create user profile document
export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userRef;
};

// Add collection and documents
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export { auth, firestore };
