// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAltJy_5Dcs2p9nZOAkMjj8HoKKeXswdEM",
  authDomain: "exclusive-event.firebaseapp.com",
  projectId: "exclusive-event",
  storageBucket: "exclusive-event.appspot.com",
  messagingSenderId: "1015900229600",
  appId: "1:1015900229600:web:af60ecffdb6fba2b4be585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;