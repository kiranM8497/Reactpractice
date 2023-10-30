import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJ12mq_hoP1DKKruTGDniznL-xwo1N_k",
  authDomain: "clone-1fd04.firebaseapp.com",
  projectId: "clone-1fd04",
  storageBucket: "clone-1fd04.appspot.com",
  messagingSenderId: "366859577944",
  appId: "1:366859577944:web:20c54970ec25982513782d",
  measurementId: "G-ZJZCEWD4ZZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth  = firebase.auth();

 
export {db , auth}