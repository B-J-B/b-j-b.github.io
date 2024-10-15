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

// Appel de la fonction pour ajouter une tenue (exemple)
ajouterTenue("Tenue de basket", 15);

function afficherTenues() {
  db.collection("tenues").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().nom}, Quantité: ${doc.data().quantite}`);
    });
  });
}

// Appel de la fonction pour afficher toutes les tenues
afficherTenues();

function mettreAJourTenue(idTenue, nouvelleQuantite) {
  db.collection("tenues").doc(idTenue).update({
    quantite: nouvelleQuantite
  }).then(() => {
    console.log("Quantité mise à jour avec succès !");
  }).catch((error) => {
    console.error("Erreur lors de la mise à jour : ", error);
  });
}

// Appel de la fonction pour mettre à jour (exemple avec un id donné)
mettreAJourTenue("ID_DE_LA_TENUE", 30);

function supprimerTenue(idTenue) {
  db.collection("tenues").doc(idTenue).delete().then(() => {
    console.log("Tenue supprimée avec succès !");
  }).catch((error) => {
    console.error("Erreur lors de la suppression : ", error);
  });
}

// Appel de la fonction pour supprimer une tenue (exemple avec un id donné)
supprimerTenue("ID_DE_LA_TENUE");
