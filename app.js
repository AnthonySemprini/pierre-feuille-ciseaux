// recup element
let resetBtn = document.getElementById("reset");
let scorejoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierreBtn = document.getElementById("opierre");
let ofeuilleBtn = document.getElementById("ofeuille");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementsByClassName("next");

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
    nextBtn.style.visibility = "visible";
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
        return;
    }

    if(choixJoueur == PIERRE){
        if(choixOrdi == FEUILLE){
            return victoirOrdinateur();
        }else if(choixOrdi == CISEAUX){
            return victoireJoueur();
        }
    }
    if(choixJoueur == FEUILLE){
        if(choixOrdi == CISEAUX){
            return victoirOrdinateur();
        }else if(choixOrdi == PIERRE){
            return victoireJoueur();
        }
    }
    if(choixJoueur == CISEAUX){
        if(choixOrdi == PIERRE){
            return victoirOrdinateur();
        }else if(choixOrdi == FEUILLE){
            return victoireJoueur();
        }
    }
};

const victoireOrdinateur = () => {
    message.textContent = "L'ordinateur gagne ...";
    scoreOrdinateur.textContent++;
};
const victoireJoueur = () => {
    message.textContent = "Vous avez gagné :)";
    scorejoueur.textContent++;
};
const preparerNouvelleManche = () => {
    btnJoueur.forEach((btn) => {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");

        btn.addEventListener("click", jouerManche);
    });
    
        nextBtn.style.visibility = "hidden";

        opierreBtn.classList.remove("active");
        ofeuilleBtn.classList.remove("active");
        ociseauxBtn.classList.remove("active");

        message.textContent = "A vous de jouer !";
    
};

nextBtn.addEventListener("click", preparerNouvelleManche);

btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click" , () =>{
    scorejoueur.textContent = 0;
    scoreOrdinateur.textContent =0;

    preparerNouvelleManche();
});