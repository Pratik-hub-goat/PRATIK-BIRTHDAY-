import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDMBZFMMahvbWglVcFrtkhrHEESO_9_GMI",
    authDomain: "pratik-15-birthday.firebaseapp.com",
    projectId: "pratik-15-birthday",
    storageBucket: "pratik-15-birthday.firebasestorage.app",
    messagingSenderId: "261810045325",
    appId: "1:261810045325:web:20fb5f893b15ed61a13dc4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db
};
