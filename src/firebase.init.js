import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAc6b52AKNvQQ1buicgiNRgzvmEYmgH6Sk",
    authDomain: "art-service-provider.firebaseapp.com",
    projectId: "art-service-provider",
    storageBucket: "art-service-provider.appspot.com",
    messagingSenderId: "1020084369434",
    appId: "1:1020084369434:web:a3a82210f4bead0dc639a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;