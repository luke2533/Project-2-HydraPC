// This is where the custom PC selected parts are shown 
const customPc = {
  case:"<p>''</p>",
  cpu:"<p>''</p>",
  gpu:"<p>''</p>",
  motherboard:"<p>''</p>",
  ram:"<p>''</p>",
  pcu:"<p>''</p>",
  ssd:"<p>'it works'</p>",
  m2:"<p>''</p>",
  hdd:"<p>''</p>",
  price:"<p>'hi'</p>"
}

document.getElementById("customPc").innerHTML = Object.values(customPc);
