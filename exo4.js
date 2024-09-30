let tableau = [
  ["a", "b", "d", "e", "l"],
  ["J", "e", "a", "n"],
  ["M", "a", "r", "i", "e"],
];

console.log(tableau[3]);
let grille = "";

for (let colonne = 0; colonne < 3; colonne++) {
  for (let ligne = 0; ligne < 3; ligne++) {
    grille = grille + "[_]";
    console.log(grille);
  }
  grille = grille + "\n";
}
console.log(tableau[tableau.length - 1]);

let prenom = "Abdell";

console.log(prenom.split("").reverse().join(""));
