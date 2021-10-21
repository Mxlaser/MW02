let darklight = document.getElementById("dark_light");
darklight.addEventListener('click', appuiButton);
let monBody = document.getElementById("body");

function appuiButton()
{
  if(monBody.getAttribute("data-theme")=="light")
  {
    monBody.setAttribute("data-theme","dark");
    darklight.innerText="Mode clair";
  }

  else
  {
    monBody.setAttribute("data-theme","light");
    darklight.innerText="Mode sombre";
  }
}

//Fonction mode sombre en fonction de l'heure de la journée
let date = new Date();
let heure = date.getHours();

if((heure > 7) && (heure < 19))
{
  monBody.setAttribute("data-theme","light");
  darklight.innerText="Mode sombre";
}
else
{
  monBody.setAttribute("data-theme","dark");
  darklight.innerText="Mode clair";
}
