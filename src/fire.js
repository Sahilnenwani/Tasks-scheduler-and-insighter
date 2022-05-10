import { initializeApp } from "firebase/app";
import {
     getAuth,
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     sendPasswordResetEmail, 
     signOut,
} from "firebase/auth"
import {
      getFirestore,
       query,
       getDocs,
     collection,
     where,
      addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBOFxU256k40Ho_ZRHmsTd20B1mUNVPSg8",
  authDomain: "todoslist-364db.firebaseapp.com",
  projectId: "todoslist-364db",
  storageBucket: "todoslist-364db.appspot.com",
  messagingSenderId: "91032177568",
  appId: "1:91032177568:web:ddacf7a08635ad03de32c5"
};
const fire = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(fire);
console.log(fire);
console.log(auth);

const logInWithEmailAndPassword = async (email, password) => {
    try {
     await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
}
const registerWithEmailAndPassword = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
       
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      } catch (err) {
        console.error(err);
     
      }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
     
    }
};
const logout = () => {
    signOut(auth);
  };
// Initialize Firebase


export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };













