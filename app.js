document.getElementById('form-tenue').addEventListener('submit', ajouterTenue);

let tenues = [];

function ajouterTenue(e) {
  e.preventDefault();
  
  const nom = document.getElementById('nom').value;
  const quantite = document.getElementById('quantite').value;

  if (nom && quantite) {
    tenues.push({ nom, quantite });
    afficherTenues();
    document.getElementById('form-tenue').reset();
  }
}

function afficherTenues() {
  const tableTenues = document.getElementById('table-tenues');
  tableTenues.innerHTML = '';

  tenues.forEach((tenue, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${tenue.nom}</td>
      <td>${tenue.quantite}</td>
      <td><button class="btn btn-danger" onclick="supprimerTenue(${index})">Supprimer</button></td>
    `;

    tableTenues.appendChild(row);
  });
}

function supprimerTenue(index) {
  tenues.splice(index, 1);
  afficherTenues();
}
