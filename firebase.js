import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDyE1a54xzvGCsNKYK_qo5Ls0POW05mPGY",
  authDomain: "mintmade-67844.firebaseapp.com",
  projectId: "mintmade-67844",
  storageBucket: "mintmade-67844.appspot.com",
  messagingSenderId: "948170930959",
  appId: "1:948170930959:web:49c89d2585476996205c7a",
  measurementId: "G-0WF1WSJJPT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase Authentication