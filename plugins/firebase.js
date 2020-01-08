import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = JSON.parse(process.env.FIREBASE_CONFIG);
  firebase.initializeApp(config);
}

const db = firebase.firestore();
export { firebase, db };
