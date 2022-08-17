import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBhJESIM0AWIFfnGTsVDsHDsH2FLyJU5Uo",
  authDomain: "redux-saga-f8877.firebaseapp.com",
  databaseURL: "https://redux-saga-f8877-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "redux-saga-f8877",
  storageBucket: "redux-saga-f8877.appspot.com",
  messagingSenderId: "918487575631",
  appId: "1:918487575631:web:a45ab6006e7d1c96538e3a",
  measurementId: "G-8QLFX89YP4"
};
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();