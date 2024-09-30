// Choix de l'ordinateur
let motsPossible = [
  "javascript",
  "allegria",
  "academy",
  "boucle",
  "conditions",
  "variable",
  "fonction",
  "objet",
  "tableau",
  "boucle",
  "syntaxe",
  "callback",
  "promise",
  "asynchrone",
  "prototype",
  "closure",
  "debugger",
  "script",
  "evenement",
  "expression",
  "declaration",
  "importation",
  "execution",
  "application",
];
let motSecret = motsPossible[Math.floor(Math.random() * motsPossible.length)];

/* 
    1. Créer une variable ligne et assigner à cette variable autant de "-" qu'il existe de lettre dans MotSecret, imprimer la variable ligne
*/

let ligne = "";
for (i = 0; i < motSecret.length; i++) {
  ligne += "-";
}

/* 
3. Créer une variable avancement qui est égale à la longueur du mot secret
*/
let avancement = motSecret.length;

/* 
    4.Coder un petit programme qui réalise l'action suivante:
    - tant que avancement est supérieur à 0
    - demander à l'utilisateur de choisir une lettre et assigner la valeur dans une variable
    - vérifier si la lettre choisie est dans le motSecret, et si c'est le cas, remplacer les "-" de ligne par la lettre chosie.
    - diminuer la valeur avancement de 1
    - imprimer dans la console la ligne
    */
let essais = motSecret.length * 2;

while (avancement > 0) {
  /* 
       5. Féliciter le joueur si l'avancement est égal à 0
       */
  if (ligne === motSecret) {
    console.log(`Félicitations, vous avez trouvé le mot secret : ${motSecret}`);
    break;
  }

  /* 
            2. Demander à l'utilisateur de choisir une lettre et l'assigner à une variable choixUtilisateur et réimprimer ligne
        */
  let choixUtilisateur = prompt(
    `Entrez une lettre : ${ligne}\nTentatives restantes : ${essais}`
  );

  let charIndex = motSecret.indexOf(choixUtilisateur);

  if (choixUtilisateur === "") {
    break;
  }
  if (choixUtilisateur.length > 1) {
    console.log("Vous ne pouvez entrer qu'une seule lettre à la fois");
    continue;
  }

  if (charIndex >= 0) {
    let ligneTemp = "";
    for (i = 0; i < motSecret.length; i++) {
      if (motSecret[i] === choixUtilisateur) {
        ligneTemp += choixUtilisateur;
      } else {
        ligneTemp += ligne[i];
      }
    }
    avancement--;
    ligne = ligneTemp;
  } else {
    /* 
        6. En tant que Ninja de Javascript, reprendre le code et ajouter un nombre de tentatives limité pour l'utilisateur.
    */
    essais--;
    if (essais === 0) {
      console.log("Vous avez perdu ! Le mot était : " + motSecret);
      break;
    }
  }
  console.log(`Dernière lettre jouée : ${choixUtilisateur}`);
  console.log(`Il vous reste ${essais} essais`);
}
