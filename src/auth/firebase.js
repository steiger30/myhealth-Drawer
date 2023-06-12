import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAv96Gx01oa8F_TAp1jT8eEh_2q5LHT0nc",
  authDomain: "myhealth-aa227.firebaseapp.com",
  projectId: "myhealth-aa227",
  storageBucket: "myhealth-aa227.appspot.com",
  messagingSenderId: "909569663214",
  appId: "1:909569663214:web:c1a45ba8891b34e63893ff"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const storage = getStorage(app)

export { db, storage }