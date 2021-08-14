import firebase from 'firebase/app'
import "firebase/auth"

// Test mode code
// use process.env.REACT_APP_FIREBASE_...
const app = firebase.initializeApp({
    apiKey: "AIzaSyCoblQxgDOEuCbGZFLeiEvrdPVN1e30Dxk",
    authDomain: "cw-hackathon.firebaseapp.com",
    projectId: "cw-hackathon",
    storageBucket: "cw-hackathon.appspot.com",
    messagingSenderId: "1023518837204",
    appId: "1:1023518837204:web:6ac50272497fdc3c1bae41",
    measurementId: "G-JVTG28QL3T"

})

export const auth = app.auth()
export default app
