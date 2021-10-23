//Début première fonction-------------------------------------------------------

//---Variable affectée au hamburger qui déclenche une fonction lors d'un clic
let hamburger = document.getElementById("hamburger").addEventListener("click", afficherMasquerBarreNavigation);

//---Fonction qui affiche le nav
function afficherMasquerBarreNavigation()
{
  let maBarreNav = document.getElementById("barre_navigation");
  if(maBarreNav.style.display == "grid")
  {
    maBarreNav.style.display = "";
  }
  else
  {
    maBarreNav.style.display = "grid";
  }
}

//Fin première fonction---------------------------------------------------------
