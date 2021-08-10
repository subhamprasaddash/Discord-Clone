import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIpV_m1Vn2I-f_u8_iUaEwN4fbDmJ9xic",
  authDomain: "discord-clone-4d350.firebaseapp.com",
  projectId: "discord-clone-4d350",
  storageBucket: "discord-clone-4d350.appspot.com",
  messagingSenderId: "469691069900",
  appId: "1:469691069900:web:3e3d11b2d88386b8915969",
  measurementId: "G-77203C35J9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
