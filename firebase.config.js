// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "olx-clone-react-listonfermi.firebaseapp.com",
  projectId: "olx-clone-react-listonfermi",
  storageBucket: "olx-clone-react-listonfermi.appspot.com",
  messagingSenderId: "812232641503",
  appId: "1:812232641503:web:ea3df6030814bd4826926a",
  measurementId: "G-42EYTQZ6ST"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
