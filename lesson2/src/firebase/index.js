// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBQuSDcYGA4kXHzGbSVmPb_XgxY_RsPtuE",

  authDomain: "gb-react-project-b7c7f.firebaseapp.com",

  projectId: "gb-react-project-b7c7f",

  storageBucket: "gb-react-project-b7c7f.appspot.com",

  messagingSenderId: "123425933655",

  appId: "1:123425933655:web:19024b176853ffe7bcd612"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;