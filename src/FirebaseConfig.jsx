// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNSzwrIJSt3fgXKe0PdFO_eBOgEe59lTU",
  authDomain: "my-brand-shop-client-side.firebaseapp.com",
  projectId: "my-brand-shop-client-side",
  storageBucket: "my-brand-shop-client-side.appspot.com",
  messagingSenderId: "327273293639",
  appId: "1:327273293639:web:00b3aa9b83c5199700ce62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);