import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_mfaWfSMxPqmqmV_1BOQRboA2fJC6Dm8",
  authDomain: "luna-mist-dp.firebaseapp.com",
  projectId: "luna-mist-dp",
  storageBucket: "luna-mist-dp.appspot.com",
  messagingSenderId: "629189316912",
  appId: "1:629189316912:web:d66fe3c1f5fdfeaef478f5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
