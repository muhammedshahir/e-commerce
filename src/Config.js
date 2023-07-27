import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider from firebase/auth
import { getFirestore } from 'firebase/firestore'; // Import getFirestore from firebase/firestore

const firebaseConfig = {
  apiKey: "AIzaSyBJKuanPYJZVrWtTc1qgFkSNbjC7sq9b1c",
  authDomain: "e-commerce-fff1d.firebaseapp.com",
  projectId: "e-commerce-fff1d",
  storageBucket: "e-commerce-fff1d.appspot.com",
  messagingSenderId: "427239892797",
  appId: "1:427239892797:web:ad460b76e1ec2a95ec0754",
  measurementId: "G-SDP11H1467"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, getFirestore }; // Export getFirestore to use it in other files if needed
