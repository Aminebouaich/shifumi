
const jouer = document.getElementById("jouer")
let choixAdver = document.getElementById("choixadvers")
let resultat = document.getElementById("resultat")
let table = [
    "pierre",
    "feuille",
    "ciseaux"
]



jouer.addEventListener ('click' , event => {
    let resultChoixJoueur = choixJoueur(); // declarer la fonction qu'on a recupéré ligne 26
    let resultChoixOrdi = choixordi() // delarer la fonction qu'on recupère ligne 34
    let result = resultMatch(resultChoixJoueur,resultChoixOrdi) // declarer le resulat avec une fonction qui a un doble paramètre 
    afficheResulat(result,resultChoixOrdi) 
    
})

function afficheResulat(result,resultChoixOrdi) { // la position du paramètre défini sa valeur
    resultat.textContent = result;
    choixAdver.textContent = resultChoixOrdi;
    changeColor(result)
}

function changeColor(result) {
    resultat.style.color = "black"
    if (result==="perdu") {
        resultat.style.color = "red"
    }
    else if (result==='gagné'){
    resultat.style.color = 'green'
    }
}



function choixJoueur() {
    const ChoixButton= document.getElementsByName("groupe1") // on recupère la valeur de checkbox avec son name et grace a la boucle for on return la valeur choix du joueur "checked" equivalent a value(button)
    let valeurChoixJoueur;
    // la boucle nous permet de parcourir les valeur des checkbox pour trouver
    for( let i = 0; i < ChoixButton.length; i++){
        // si le bouton est coché on défini la valeur du choix du joueur 
        if(ChoixButton[i].checked){
            valeurChoixJoueur = ChoixButton[i].value   
        }
    }
    return valeurChoixJoueur // on récupère la valeur choix joueur 
} 
    
    
function choixordi() {
    let randomChoix = Math.floor(Math.random()*table.length) // choix d'un nombre random parmis la liste des choix (table)
    
    let choixIa = table[randomChoix] // choix random ordi du tableau pierre feuille ciseaux en récuperant la valeur de son index
    return choixIa
}


function resultMatch (choixJoueur,choixordi) { // la fonction resultmmatch a deux paramètre le premier est le choixjoueur qu'on a associé a la variable "resultChoixdeJoueur" (ligne12) on retire les parenthèses
        console.log(choixJoueur,choixordi);
        


        // la logique du jeu shifumi
    if (choixJoueur === choixordi) { 
        
        return "match nul";
        
    }
    else if (choixJoueur==="pierre") {
        if (choixordi === "feuille"){
            return "perdu"
        }
        else if (choixordi === "ciseaux"){
            return "gagné"
        }
    }
    else if (choixJoueur==="feuille") {
        if (choixordi === "ciseaux"){
            return "perdu"
        }
        else if (choixordi === "pierre"){
            return "gagné"
        }
    }
    else if (choixJoueur==="ciseaux") {
        if (choixordi === "pierre"){
            return "perdu"
        }
        else if (choixordi === "feuille"){
            return "gagné"
        }
    }
}