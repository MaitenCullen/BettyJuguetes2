import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVRfwGTxN_Db3vVnOB9fyqKkEUIxSiBoo",
    authDomain: "betty-juguetes-y-placeres.firebaseapp.com",
    projectId: "betty-juguetes-y-placeres",
    storageBucket: "betty-juguetes-y-placeres.appspot.com",
    messagingSenderId: "1003110927840",
    appId: "1:1003110927840:web:2947da214d1cdc2117ef85",
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);