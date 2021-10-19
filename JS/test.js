/*let message = "La somme fait : ";
let val1 = 15;
let val2 = 4;
let resultat = val1 + val2;
console.debug("VAL1 vaut : " + val1);
console.debug("VAL2 vaut : " + val2);
console.debug("RESULTAT vaut : " + resultat);
console.debug(message + resultat);
console.debug(message + val1 + val2);*/

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', afficherMasquerBarreNavigation);
function afficherMasquerBarreNavigation()
{
  //console.log("Click sur hamburger");
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
