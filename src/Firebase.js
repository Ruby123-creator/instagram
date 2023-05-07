import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPg9Rfjr4lzZTFweuIYJfeB2gsoeS3v9E",
  authDomain: "instagram-react-app-edc95.firebaseapp.com",
  projectId: "instagram-react-app-edc95",
  storageBucket: "instagram-react-app-edc95.appspot.com",
  messagingSenderId: "108503946454",
  appId: "1:108503946454:web:e58a116f0badaf498b6577",
  databaseUrl:"https://instagram-react-app-edc95-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp;