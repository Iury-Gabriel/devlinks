
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBeAmOy-PW7Nz40zS1FTyaldxJvP_TIps",
  authDomain: "reactlinks-6da9d.firebaseapp.com",
  projectId: "reactlinks-6da9d",
  storageBucket: "reactlinks-6da9d.appspot.com",
  messagingSenderId: "1027267815252",
  appId: "1:1027267815252:web:c0f860d322c8c3296d8ac1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };