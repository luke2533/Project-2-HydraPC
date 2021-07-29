// This is where the custom PC selected parts are shown
const customPc = {
  case:"",
  cpu:"",
  gpu:"",
  motherboard:"",
  ram:"",
  pcu:"<p>''</p>",
  ssd:"",
  m2:"",
  hdd:"",
  price:""
}

var $partPicker = $("input[name='case']");
$partPicker.change(function(){
  var $selected = $partPicker.filter(function(){
    // for (let i = 0; i < $partPicker.length; i++){
      return $(this).prop("checked");
    // }

  });
  document.getElementById("customPc-case").innerHTML = $selected.val();
  console.log($selected.val()); //$selected.val()
});

// document.getElementById("customPc").innerHTML = Object.values(customPc);
