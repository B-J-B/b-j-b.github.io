// Configuration Firebase via CDN (pas besoin d'importer manuellement)
const firebaseConfig = {
  apiKey: "AIzaSyBShcMFjDWZcfFyOjtYMKp8HijeN1fVwG4",
  authDomain: "itaparicabada.firebaseapp.com",
  projectId: "itaparicabada",
  storageBucket: "itaparicabada.appspot.com",
  messagingSenderId: "844644064770",
  appId: "1:844644064770:web:bc1288ad7a05d94016511b"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser Firestore (la base de données)
const db = firebase.firestore();

// Ajouter une tenue
function ajouterTenue(nom, quantite) {
  db.collection("tenues").add({
    nom: nom,
    quantite: quantite
  }).then(() => {
    console.log("Tenue ajoutée avec succès !");
    afficherTenues(); // Mettre à jour la liste des tenues après l'ajout
  }).catch((error) => {
    console.error("Erreur lors de l'ajout : ", error);
  });
}

// Afficher les tenues
function afficherTenues() {
  db.collection("tenues").get().then((querySnapshot) => {
    const tableTenues = document.getElementById("table-tenues");
    tableTenues.innerHTML = ""; // Vider la table avant d'ajouter les nouvelles données

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = `
        <tr>
          <td>${data.nom}</td>
          <td>${data.quantite}</td>
          <td>
            <button onclick="supprimerTenue('${doc.id}')" class="btn btn-danger btn-sm">Supprimer</button>
          </td>
        </tr>
      `;
      tableTenues.innerHTML += row;
    });
  });
}

// Supprimer une tenue
function supprimerTenue(idTenue) {
  db.collection("tenues").doc(idTenue).delete().then(() => {
    console.log("Tenue supprimée avec succès !");
    afficherTenues(); // Mettre à jour la liste après la suppression
  }).catch((error) => {
    console.error("Erreur lors de la suppression : ", error);
  });
}

// Gérer le formulaire d'ajout de tenue
document.getElementById("form-tenue").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêcher le rechargement de la page

  const nom = document.getElementById("nom").value;
  const quantite = document.getElementById("quantite").value;

  ajouterTenue(nom, parseInt(quantite));

  // Réinitialiser le formulaire après l'ajout
  document.getElementById("form-tenue").reset();
});

// Charger les tenues au démarrage
afficherTenues();
