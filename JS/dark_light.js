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

const d = new Date();
const hour = d.getHours();

function darkLight()
{
  if(hour > 7 || hour < 19)
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
