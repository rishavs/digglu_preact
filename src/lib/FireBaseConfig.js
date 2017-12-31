import firebase from 'firebase';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCowl3jZXD2x1SQV8nseptffi0E3zP33F4",
    authDomain: "digglu-id.firebaseapp.com",
    databaseURL: "https://digglu-id.firebaseio.com",
    projectId: "digglu-id",
    storageBucket: "digglu-id.appspot.com",
    messagingSenderId: "578853121693"
  };

firebase.initializeApp(config);

export default firebase;

export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();