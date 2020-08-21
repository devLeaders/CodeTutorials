import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "codetutorials-f9ede.firebaseapp.com",
  databaseURL: "https://codetutorials-f9ede.firebaseio.com/",
  projectId: "codetutorials-f9ede",
  storageBucket: "codetutorials-f9ede.appspot.com",
  messagingSenderId: "29847575452",
  appId: "1:29847575452:web:1396be3ecb16e7c16c4659",
  measurementId: "G-8J72TLB6RZ",
};
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
