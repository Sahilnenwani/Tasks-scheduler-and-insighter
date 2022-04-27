import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("process.env.REACT_APP_FIREBASE_API_KEY", process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBXpb4WKYDvnACSzJiBZaMlYZuio4oRUdY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "todo-s-554c8.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "todo-s-554c8",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "todo-s-554c8.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "282531198044",
  appId:process.env.REACT_APP_FIREBASE_APP_ID || "1:282531198044:web:51d7d4a8359f9ac9be2299"
}
const app=initializeApp(firebaseConfig)
console.log("firebase app",app);
export const auth=getAuth()
console.log("firebase auth",auth);
export default app;