import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCpaK2dtSNGA_yrRc3ZbQss9QMS7LcwcCc",
  authDomain: "olx-test-2b966.firebaseapp.com",
  projectId: "olx-test-2b966",
  storageBucket: "olx-test-2b966.appspot.com",
  messagingSenderId: "522181822276",
  appId: "1:522181822276:web:431d824b3911a3a50a3911",
  measurementId: "G-RPPVTKDJZG",
};

export default firebase.initializeApp(firebaseConfig);
