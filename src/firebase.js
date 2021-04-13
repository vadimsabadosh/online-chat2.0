import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJXPA2OrU9pXPltyT5nCYkWzRcBTOiaOQ",
  authDomain: "online-chat-59c21.firebaseapp.com",
  databaseURL: "https://online-chat-59c21-default-rtdb.firebaseio.com",
  projectId: "online-chat-59c21",
  storageBucket: "online-chat-59c21.appspot.com",
  messagingSenderId: "554667159845",
  appId: "1:554667159845:web:a1a578840160138072aacc",
  measurementId: "G-L7KE7B7KLS"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;