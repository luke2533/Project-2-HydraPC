// This is where you add price tracker and pc tracker
var customPc = {
  "case": "",
  "cpu": "",
  "gpu": "",
  "motherboard":"",
  "ram":"",
  "pcu":"",
  "ssd":"",
  "m-2":"",
  "hdd":"",
}

var customCost = {
  "case": "",
  "cpu": "",
  "gpu": "",
  "motherboard":"",
  "ram":"",
  "pcu":"",
  "ssd":"",
  "m-2":"",
  "hdd":"",
}

buildPc = [
  ["case", "input[name='case']", "customPc-case", "Case: ", "data-price"],
  ["cpu", "input[name='cpu']", "customPc-cpu", "Cpu: ", "data-price"],
  ["gpu", "input[name='gpu']", "customPc-gpu", "Gpu: ", "data-price"],
  ["motherboard", "input[name='motherboard']", "customPc-motherboard", "Motherboard: ", "data-price"],
  ["ram", "input[name='ram']", "customPc-ram", "RAM: ", "data-price"],
  ["pcu", "input[name='pcu']", "customPc-pcu", "PCU: ", "data-price"],
  ["ssd", "input[name='ssd']", "customPc-ssd", "SSD: ", "data-price"],
  ["m-2", "input[name='m-2']", "customPc-m2", "M.2: ", "data-price"],
  ["hdd", "input[name='hdd']", "customPc-hdd", "HDD: ", "data-price"]
];



for (var i = 0; i < buildPc.length; i++) {
  var $generalSpec = $(buildPc[i][1]);
  // var $specCost = $(buildPc[i][4]);

  $generalSpec.change(function(value){
    /* All code below here */
    console.log(value.target.name);

    for (var i = 0; i < buildPc.length; i++){
      if (buildPc[i][0] == value.target.name) {
        // Get buildPc contents and populate in div side menu
        customCost[value.target.name] = value.target.dataset.price;

        console.log(value.target.dataset.price);
        // console.log(value.target.dataPrice);

        // Place whatever contents you want to the menu now from list above
        customPc[value.target.name] = value.target.value;

        console.log(customCost);
        console.log(buildPc[i]);
        console.log(value);
        specTracker();
        totalCost();

        }
      }
    })
    $(this).prop("checked");
  };





function specTracker() {
  $("#customPc-case").html(customPc["case"]);
  $("#customPc-cpu").html(customPc["cpu"]);
  $("#customPc-gpu").html(customPc["gpu"]);
  $("#customPc-motherboard").html(customPc["motherboard"]);
  $("#customPc-ram").html(customPc["ram"]);
  $("#customPc-pcu").html(customPc["pcu"]);
  $("#customPc-ssd").html(customPc["ssd"]);
  $("#customPc-m-2").html(customPc["m-2"]);
  $("#customPc-hdd").html(customPc["hdd"]);
}

function totalCost() {
  var caseC = Number(customCost["case"]);
  var cpu = Number(customCost["cpu"]);
  var gpu = Number(customCost["gpu"]);
  var motherboard = Number(customCost["motherboard"]);
  var ram = Number(customCost["ram"]);
  var pcu = Number(customCost["pcu"]);
  var ssd = Number(customCost["ssd"]);
  var m2 = Number(customCost["m-2"]);
  var hdd = Number(customCost["hdd"]);

  var total = caseC + cpu + gpu + motherboard + ram + pcu + ssd + m2 + hdd;
  $("#totalCost").html(total);
  console.log(total);
}
