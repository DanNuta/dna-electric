import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLL8TZJJSxEvfIAJzaNZczceEpSa-uC4E",
  authDomain: "dns-electric.firebaseapp.com",
  projectId: "dns-electric",
  storageBucket: "dns-electric.appspot.com",
  messagingSenderId: "85497042633",
  appId: "1:85497042633:web:dcec1a65fa5a3c8b0c9f18"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
