import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBjHlglQrBrKfvxw9_toWOmktBfTA-Y8nY",
  authDomain: "react-mgp-cci-44c73.firebaseapp.com",
  databaseURL: "https://react-mgp-cci-44c73-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-mgp-cci-44c73",
  storageBucket: "react-mgp-cci-44c73.appspot.com",
  messagingSenderId: "279069574408",
  appId: "1:279069574408:web:ba8ca7864aeb07ba4d58bd",
  measurementId: "G-1RWYTFPG76"
})
//9CB0A6C5-A5E1-44AE-A73C-07C4DF58F363

export const auth = app.auth()
export default app
