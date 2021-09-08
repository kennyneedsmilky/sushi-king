import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// Initialize Firebase
export const firebaseApp = initializeApp({
    appId: "1:685830100745:web:19043bbe4760443274e5d8",
    apiKey: "AIzaSyDWGsTbaiFC05t1mn2NevHD0lp1_Ve31rk",
    authDomain: "sushi-king-84ce0.firebaseapp.com",
    messagingSenderId: "685830100745",
    projectId: "sushi-king-84ce0",
    storageBucket: "sushi-king-84ce0.appspot.com"
});
// Database and Database Ref
export const db = getFirestore(firebaseApp); // console.log(JSON.stringify(db));

// Add Data
export async function addUser () {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (err) {
        console.error("Error adding document: ", err);
    }
}

// Render Sushi List
async function renderSushiList () {
    const results = [];
    const querySnapshot = await getDocs(collection(db, "sushi-list"));
    querySnapshot.forEach(doc => {
        results.push(doc.data());
    });
    return results;
}

// Get Sushi List
export function getSushiList () {
    return renderSushiList();
}