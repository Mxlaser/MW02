/*let hamburger = document.getElementById("hamburger");
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
}*/
let darklight = document.getElementById("dark_light");
darklight.addEventListener('click', dark_light);
function dark_light()
{
  if(data-theme=="light")
  {
    data-theme="dark";
  }
  else
  {
    data-theme="light";
  }
}
