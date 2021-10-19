let darklight = document.getElementById("dark_light");
darklight.addEventListener('click', appuiButton);

function appuiButton()
{
  let monBody = document.getElementById("body");
  if(monBody.getAttribute("data-theme","light"))
  {
    monBody.setAttribute("data-theme","dark");
    //darklight.setAttribute("name", "Mode clair");
  }
  else
  {
    monBody.setAttribute("data-theme","light");
    //darklight.setAttribute("name", "Mode sombre");
  }
}
