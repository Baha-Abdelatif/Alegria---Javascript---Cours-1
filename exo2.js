/*
1. Imprimer une suite de nombre compris entre 1 et 20. A chaque multiple de 3, remplacer le nombre par “Multiple de 3”
*/

// for(let i=1; i<=20; i++){
//   if(i%3 === 0){
//     console.log("Multiple de 3");
//   } else {
//     console.log(i);
//   }
// }


//2. Vous devez coder un petit jeu. 
// a. Créer une variable 'ordinateur' aléatoire entre 1 et 100
let ordinateur = Math.floor(Math.random() * 100) + 1;
ordinateur = 44;


// b. Permettre à l'utilisateur de donner un chiffre entre 1 et 100 dans la console et l'assigner à une variable nommée 'utilisateur'
// let guess = prompt("Entrez un chiffre entre 1 et 100");

/* 
c. Si le choix de l'utilisateur est égal au choix de l'ordinateur, imprimer "Bravo, vous avez trouvé"

Si le choix de l'utilisateur est supérieur au choix de l'ordinateur, imprimer dans la console "Trop grand" 

Si le choix de l'utilisateur est inférieur au choix de l'ordinateur, imprimer dans la console "Trop petit"
*/ 

/*
Maintenant nous allons faire tourner le programme pour que l'utilisateur ait 6 tentatives pour trouver le choix de l'ordinateur.
Faire une boucle qui intègre le code du b. et du c. 
Rajouter une dernière condition en dessous de la boucle qui précise que si le nombre de tentatives est supérieur à 6, alors on imprime dans la console "Vous avez perdu ! Le nombre était [choix de l'ordinateur]
*/ 

let trys = 0;

while(trys <=6){
    let guess = prompt("Entrez un chiffre entre 1 et 100");
    if(guess === ""){
        break;
    }
    if(trys === 6){
        console.log(`Vous avez perdu ! Le nombre était ${ordinateur}`);
        break;
    }
    if(guess == ordinateur){
        console.log("Bravo, vous avez trouvé");
        break;
    } else if(guess > ordinateur){
        console.log("Trop grand");
    } else if(guess < ordinateur){
        console.log("Trop petit");
    }
    trys++;    
    console.log(`Il vous reste ${6-trys} essais`);
    console.log("Essai precedent : " + guess);    
}




