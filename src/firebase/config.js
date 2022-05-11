import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJwngDVGh8mHATY2HBlcWDDiiwX7yIOGc",
  authDomain: "boba-boys.firebaseapp.com",
  databaseURL: "https://boba-boys-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "boba-boys",
  storageBucket: "boba-boys.appspot.com",
  messagingSenderId: "7235050772",
  appId: "1:7235050772:web:9145bc77216ce1ac587601"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();