// 1. Créer deux variables prenom et nom
let prenom = "Charles-Henri";
let nom = "Dupont";

/*2. Imprimer dans la console la valeur du prénom et du nom : “Le prénom est [valeur] et le nom est [valeur]”*/

console.log(`Le prénom est ${prenom} et le nom est ${nom}`);

/*3. Coder un petit programme qui permet d’imprimer dans la console la variable 
qui comporte le plus de lettres et donner le nombre de lettres. 
En fonction de la longueur, imprimer soit :
“Le prénom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le nom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le prénom et le nom ont le même nombre de lettres et en comportent 
[nombre de lettres]”*/

if (prenom.length > nom.length) {
  console.log(
    `Le prénom ${prenom} a le plus de lettres et en comporte ${prenom.length}`
  );
} else if (prenom.length < nom.length) {
  console.log(
    `Le nom ${nom} a le plus de lettres et en comporte ${nom.length}`
  );
} else {
  console.log(
    `Le prénom et le nom ont le même nombre de lettres et en comportent ${prenom.length}`
  );
}

// 4. Passer la dernière lettre du prénom en lettre capitale
let lastLetter = prenom[prenom.length - 1].toUpperCase();
let prenomFormatte = prenom.slice(0, prenom.length - 1) + lastLetter;
console.log("prenom formatté : " + prenomFormatte);

//5. Remplacer la première lettre du prénom par la première lettre du nom
let prenomModifie = nom[0] + prenom.slice(1);
console.log("prenom modifié : " + prenomModifie);

//6. Inverser les lettres du prénom (par exemple Henri devient irneH)
let prenomInverse ="";
for (let i = prenom.length - 1; i >= 0; i--) {
  prenomInverse += prenom[i];
}

console.log("prenom inversé : " + prenomInverse);

//7. Supprimer toutes les voyelles dans la phrase suivante “Alegria Academy Rocks”
let phrase = "Alegria Academy Rocks";
let phraseSansVoyelles="";

for (let i = 0; i < phrase.length; i++) {
  if (
    phrase[i] !== "a" &&
    phrase[i] !== "e" &&
    phrase[i] !== "i" &&
    phrase[i] !== "o" &&
    phrase[i] !== "u" &&
    phrase[i] !== "y"
  ) {
    phraseSansVoyelles += phrase[i];
  }
}
console.log(phraseSansVoyelles);
