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
};
btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));