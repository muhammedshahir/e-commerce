
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJKuanPYJZVrWtTc1qgFkSNbjC7sq9b1c",
  authDomain: "e-commerce-fff1d.firebaseapp.com",
  projectId: "e-commerce-fff1d",
  storageBucket: "e-commerce-fff1d.appspot.com",
  messagingSenderId: "427239892797",
  appId: "1:427239892797:web:ad460b76e1ec2a95ec0754",
  measurementId: "G-SDP11H1467"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
