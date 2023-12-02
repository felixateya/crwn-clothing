// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgsGGICpZwwNcFnakNfJCDWRF93GabXpc",
  authDomain: "crwn-db-c2d30.firebaseapp.com",
  projectId: "crwn-db-c2d30",
  storageBucket: "crwn-db-c2d30.appspot.com",
  messagingSenderId: "577836170445",
  appId: "1:577836170445:web:1453581a1044a0d6e77d84",
  measurementId: "G-EDLDSWM1WB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage();

provider.setCustomParameters({
  login_hint: "user@example.com",
});

export const signInWithGoogle = () =>{signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })}
