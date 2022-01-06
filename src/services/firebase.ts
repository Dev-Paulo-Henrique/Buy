import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey:  "AIzaSyCZeYLCqnNpU8yvx0w7MYsJrHweU8uVUlg",
  authDomain: "letmeask-d1d66.firebaseapp.com",
  databaseURL: "https://letmeask-d1d66-default-rtdb.firebaseio.com",
  projectId: "letmeask-d1d66",
  storageBucket: "letmeask-d1d66.appspot.com",
  messagingSenderId: "1008658225161",
  appId: "1:1008658225161:web:4ca198ada7dcd17a5cc0d8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }