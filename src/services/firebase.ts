import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey:  "AIzaSyDM86GYpf_OdQcOdYS2VuZZZYGvLzWN3XQ",
  authDomain: "petfoodpublications.firebaseapp.com",
  databaseURL: "https://petfoodpublications-default-rtdb.firebaseio.com",
  projectId: "petfoodpublications",
  storageBucket: "petfoodpublications.appspot.com",
  messagingSenderId: "416338674920",
  appId: "1:416338674920:web:6fe0991d6b7cefd91f355d",
  measurementId: "G-XC25VQNNK4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }