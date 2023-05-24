// recup element
let resetBtn = document.getElementById("reset");
let scorejoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierre = document.getElementById("opierre");
let ofeuille = document.getElementById("ofeuille");
let ociseaux = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

//logique
const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur");//sert a recup tj la div

    btnJoueur.forEach((btn) =>{
    btn.classList.add("desactivated");
    btn.removeEventListener("click", jouerManche);
    });

    choix.classList.remove("desctivated");
    choix.classList.add("active");

    let choixJoueur = choix.id;

    let choixOrdi = faireChoixOrdinateur();

    verifierGagnant(choixJoueur, choixOrdi);
};
const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const faireChoixOrdinateur = () => {
    //0 = pierre
    // 1 = feuille
    // 2 = ciseaux

    let nbAleatoire = Math.floor(Math.random() *3);
    switch(nbAleatoire){
        case 0:
            opierre.classList.add("active");
            return PIERRE;

        case 1:
            ofeuille.classList.add("active");
            return FEUILLE;

        case 2:
            ociseaux.classList$.add("active");
            return CISEAUX;
 }
};

const verifierGagnant = (choixJoueur, choixOrdi) => {
    if(choixJoueur == choixOrdi){
        message.textContent = "Egalité !";
        return
    }

    if(choixJoueur == PIERRE){
        if(choixOrdi == FEUILLE){
            return victoirOrdinateur();
        }
    }
};

const victoireOrdinateur = () => {
    
}

btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));