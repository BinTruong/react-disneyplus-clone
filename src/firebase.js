import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJUhtFRkAZ0yWJO18DN6vICl67ciZMZ-A",
  authDomain: "disneyplus-clone-a180a.firebaseapp.com",
  projectId: "disneyplus-clone-a180a",
  storageBucket: "disneyplus-clone-a180a.appspot.com",
  messagingSenderId: "512615833589",
  appId: "1:512615833589:web:cd384255cbc9f81877cabc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
