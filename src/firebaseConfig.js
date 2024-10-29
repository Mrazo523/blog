import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvUtyx8qck-dAAMAk_2eAYpKtl-EH-Sk",
  authDomain: "blog-a94ed.firebaseapp.com",
  projectId: "blog-a94ed",
  storageBucket: "blog-a94ed.appspot.com",
  messagingSenderId: "99757336937",
  appId: "1:99757336937:web:f23e0950d494b7b56735f8",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
