
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID 
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCBAnqkyKp1GKYExGab1jZDIKEe3J3d9bs",
//     authDomain: "rm-firestock.firebaseapp.com",
//     projectId: "rm-firestock",
//     storageBucket: "rm-firestock.firebasestorage.app",
//     messagingSenderId: "359401393858",
//     appId: "1:39401393858:web:94f117e2811beeb647755b"
// };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
