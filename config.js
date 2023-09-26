import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDG2MlTOawdaJ147am33op4GSrNx0ff090",
    authDomain: "project-71-b8d36.firebaseapp.com",
    projectId: "project-71-b8d36",
    storageBucket: "project-71-b8d36.appspot.com",
    messagingSenderId: "433169738979",
    appId: "1:433169738979:web:7798e222f1ee326f90a9d6"
  };

//
firebase.initializeApp(firebaseConfig)

export default firebase.firestore();
