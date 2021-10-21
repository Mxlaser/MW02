let submit = document.getElementById("valider").addEventListener('click', VerifierFormulaireInscription);

function VerifierFormulaireInscription()
{
  let mdp1 = document.getElementById("mdp1").value;
  let mdp2 = document.getElementById("mdp2").value;
  if(mdp1 != mdp2)
  {
    alert("Les mots de passes sont différents");
    event.preventDefault();
  }
}

if(document.getElementById("mdp_longueur").classList.contains('rouge'))
{
  
}



document.getElementById("mdp1").addEventListener('input', VerifierMotDePasse);

function VerifierMotDePasse()
{
  mdp = document.getElementById("mdp1").value;
  /*if((mdp.length) >= 8)
  {
    console.debug("nombre de caractères corrects");
  }
  else
  {
    console.debug("incorrect");
  }*/
  let text;
  for (let i = 0; i < mdp.length; i++)
  {
    text += mdp.charAt(i);
    console.debug(text);
  }
  console.debug(mdp);
}
