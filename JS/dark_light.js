let darklight = document.getElementById("dark_light");
darklight.addEventListener('click', appuiButton);

function appuiButton()
{
  let monBody = document.getElementById("body");
  if(monBody.hasAttribute("data-theme","light"))
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
