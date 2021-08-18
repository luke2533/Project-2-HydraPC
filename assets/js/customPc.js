// This is where you add price tracker and pc tracker
var customPc = {
  "case": "",
  "cpu": "",
  "gpu": "",
  "motherboard": "",
  "ram": "",
  "pcu": "",
  "ssd": "",
  "m2": "",
  "hdd": "",
}

buildPc = [
  ["case", "input[name='case']", "customPc-case", "Case: ", "data-price"],
  ["cpu", "input[name='cpu']", "customPc-cpu", "Cpu: ", "data-price"],
  ["gpu", "input[name='gpu']", "customPc-gpu", "Gpu: ", "data-price"],
  ["motherboard", "input[name='motherboard']", "customPc-motherboard", "Motherboard: ", "data-price"],
  ["ram", "input[name='ram']", "customPc-ram", "RAM: ", "data-price"],
  ["pcu", "input[name='pcu']", "customPc-pcu", "PCU: ", "data-price"],
  ["ssd", "input[name='ssd']", "customPc-ssd", "SSD: ", "data-price"],
  ["m2", "input[name='m2']", "customPc-m2", "M.2: ", "data-price"],
  ["hdd", "input[name='hdd']", "customPc-hdd", "HDD: ", "data-price"]
];



for (var i = 0; i < buildPc.length; i ++){

  var $generalSpec = $(buildPc[i][1]);
  $generalSpec.change(function(value){
      // Code goes below

    console.log(value.target.name);
    for (var i = 0; i < buildPc.length; i ++){
      if (buildPC[i][0] == value.target.name){
        // This gets buildPC contents and populates them
        console.log(buildPC[1]);
        console.log(value);
        // Place whatever contetns you want to the menu now from list above
        customPC[value.target.name] = value.target.value;
        console.log(customPC);
        populateTracker();
      }
    }
    //Finally check the item
    $(this).prop("checked");
  });
}
function populateTracker(){
  $("#customPc-case").html(customPC["case"]);
  $("#customPc-cpu").html(customPC["cpu"]);
  $("#customPc-gpu").html(customPC["gpu"]);
  $("#customPc-motherboard").html(customPC["motherboard"]);
  $("#customPc-ram").html(customPC["ram"]);
  $("#customPc-pcu").html(customPC["pcu"]);
  $("#customPc-ssd").html(customPC["ssd"]);
  $("#customPc-m2").html(customPC["m2"]);
  $("#customPc-hdd").html(customPC["hdd"]);
}
