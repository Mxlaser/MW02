//Début première fonction-------------------------------------------------------

//---Variable affectée au bouton qui déclenche une fonction lors d'un clic
let darklight = document.getElementById("dark_light").addEventListener("click", appuiButton);
//---Variable affectée au body
let monBody = document.getElementById("body");

//---Fonction qui change le mode de la page (clair ou sombre)
function appuiButton()
{
  if(monBody.getAttribute("data-theme")=="light")
  {
    monBody.setAttribute("data-theme","dark");
    darklight.textContent="Mode clair";
  }

  else
  {
    monBody.setAttribute("data-theme","light");
    darklight.textContent="Mode sombre";
  }
}

//Fin première fonction---------------------------------------------------------

//Début gestion du monde sombre en fonction de l'heure--------------------------

//---Variable qui prend la date actuelle
let date = new Date();
//---Variable qui prend seulement l'heure de la variable date
let heure = date.getHours();

if((heure > 7) && (heure < 19))
{
  monBody.setAttribute("data-theme","light");
  darklight.textContent="Mode sombre";
}
else
{
  monBody.setAttribute("data-theme","dark");
  darklight.textContent="Mode clair";
}

//Fin gestion du mode sombre en fonction de l'heure-----------------------------
