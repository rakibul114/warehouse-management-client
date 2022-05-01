import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7koMfWAgMjJEFa--Duv9cSlessujRs2M",
  authDomain: "warehouse-management-9c24b.firebaseapp.com",
  projectId: "warehouse-management-9c24b",
  storageBucket: "warehouse-management-9c24b.appspot.com",
  messagingSenderId: "808438775270",
  appId: "1:808438775270:web:94394d436a45221fbc6a27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;