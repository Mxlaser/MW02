//Debut première fonction-------------------------------------------------------

//---Fontion s'exécute tte les 1s
setInterval(MettreAJourLeCompteur, 1000);
//--Variables affectée aux div jours, heures, minutes et secondes
let divJours = document.getElementById("compteurJours");
let divHeures = document.getElementById("compteurHeures");
let divMinutes = document.getElementById("compteurMinutes");
let divSecondes = document.getElementById("compteurSecondes");

//---Fonction qui met à jour le compteur
function MettreAJourLeCompteur()
{
  let dateActuelle = new Date(Date.now());
  let dateStage = new Date(Date.UTC(2022, 04, 22));
  //---Variable qui calcule l'ecart entre la date du stage et la date actuelle
  let diffTemps = dateStage.getTime() - dateActuelle.getTime();
  //---Varibles qui convertissent la date en jours, heures, minutes et secondes
  let diffJours = diffTemps / (1000 * 3600 * 24);
  let diffHeures = (diffTemps / (1000 * 3600)) % 24 ;
  let diffMinutes = (diffTemps / ( 1000 * 60)) % 60;
  let diffSecondes = (diffTemps / 1000) % 60;

  divJours.innerText = Math.floor(diffJours) + "J";
  divHeures.innerText = Math.floor(diffHeures) + "H";
  divMinutes.innerText = Math.floor(diffMinutes) + "M";
  divSecondes.innerText = Math.floor(diffSecondes) + "S";
}

//Fin première fonction---------------------------------------------------------
