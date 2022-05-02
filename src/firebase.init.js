// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmslAXiucAqBiwQUEe9H39nrXGb0Y8ZgA",
    authDomain: "weave-dreams-to-paint.firebaseapp.com",
    projectId: "weave-dreams-to-paint",
    storageBucket: "weave-dreams-to-paint.appspot.com",
    messagingSenderId: "763218584023",
    appId: "1:763218584023:web:cac76469d5e09d06c9eb92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;