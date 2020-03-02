import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDyhc5laV1rfcMV526XpdEsQ6dKIkzOYjQ",
    authDomain: "metric-f1cb5.firebaseapp.com",
    databaseURL: "https://metric-f1cb5.firebaseio.com/",
  };
  
  // Initialize Firebase
  const firebaseObj = firebase.initializeApp(firebaseConfig);

export default firebaseObj;