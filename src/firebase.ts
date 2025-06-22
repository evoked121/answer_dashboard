import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_vYsEwGPdHyZdSgsqbJmqM1ExJSoxcY4",
  authDomain: "answerai-748a3.firebaseapp.com",
  projectId: "answerai-748a3",
  storageBucket: "answerai-748a3.firebasestorage.app",
  messagingSenderId: "1032129787336",
  appId: "1:1032129787336:web:c8c71ca624c1f0f049fcfd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
