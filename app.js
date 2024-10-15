// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShcMFjDWZcfFyOjtYMKp8HijeN1fVwG4",
  authDomain: "itaparicabada.firebaseapp.com",
  projectId: "itaparicabada",
  storageBucket: "itaparicabada.appspot.com",
  messagingSenderId: "844644064770",
  appId: "1:844644064770:web:bc1288ad7a05d94016511b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (la base de données)
const db = firebase.firestore();

// Ajouter une tenue dans la base de données Firebase
function ajouterTenue(nom, quantite) {
  db.collection("tenues").add({
    nom: nom,
    quantite: quantite
  }).then(() => {
    console.log("Tenue ajoutée avec succès !");
  }).catch((error) => {
    console.error("Erreur lors de l'ajout : ", error);
  });
}

// Exemple pour lire les tenues
db.collection("tenues").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().nom}`);
  });
});