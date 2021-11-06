import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA9JZK2JMJs7EuqPl3zmRkHlUVWXwo2C3U",
    authDomain: "keeper-5729a.firebaseapp.com",
    projectId: "keeper-5729a",
    storageBucket: "keeper-5729a.appspot.com",
    messagingSenderId: "659800917790",
    appId: "1:659800917790:web:5bb60b8902b83b8a71ab0f",
    measurementId: "G-NZB8JC1Z2D"
  };
  
  export const Firebase = firebase.initializeApp(firebaseConfig);