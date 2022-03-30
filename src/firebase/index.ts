import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { StorageReference } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqeULYdxmKcEhWr8jls7TEoBHQhqwC8Dk",
  authDomain: "chosiverse.firebaseapp.com",
  projectId: "chosiverse",
  storageBucket: "chosiverse.appspot.com",
  messagingSenderId: "1045267718639",
  appId: "1:1045267718639:web:90f21856c7bfbaa890561a",
  measurementId: "G-6VH4L729T1",
};

const firebaseApp = initializeApp(firebaseConfig);

// Firestore
const firestore = getFirestore(firebaseApp);
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// Cloud Storage
const storage = getStorage(firebaseApp);

export default firebaseApp;
export { firestore, createCollection, storage };
