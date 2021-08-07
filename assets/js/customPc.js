// This is where you add price tracker and pc tracker
var customPc = {
  case:"",
  cpu:"",
  gpu:"",
  motherboard:"",
  ram:"",
  pcu:"",
  ssd:"",
  m2:"",
  hdd:"",
}

buildPc = [
  ["input[name='case']", "customPc-case", "Case: ", "data-price"],
  ["input[name='cpu']", "customPc-cpu", "Cpu: ", "data-price"],
  ["input[name='gpu']", "customPc-gpu", "Gpu: ", "data-price"],
  ["input[name='motherboard']", "customPc-motherboard", "Motherboard: ", "data-price"],
  ["input[name='ram']", "customPc-ram", "RAM: ", "data-price"],
  ["input[name='pcu']", "customPc-pcu", "PCU: ", "data-price"],
  ["input[name='ssd']", "customPc-ssd", "SSD: ", "data-price"],
  ["input[name='m2']", "customPc-m2", "M.2: ", "data-price"],
  ["input[name='hdd']", "customPc-hdd", "HDD: ", "data-price"]
];



for (var i = 0; i < buildPc.length; i ++){
  var $generalSpec = $(buildPc[i][0]);
  $generalSpec.change(function(){
    var $selectedSpec = $generalSpec.filter(function(){
      return $(this).prop("checked");
    });

    // var priceTracker = function(){
    //   // var caseCost = $(".price-case").dataset.casePrice;
    //   var caseCostArray = $(".price-case");
    //   for(var i = 1; i < caseCostArray.length; i ++){
    //     if (caseCostArray[i].dataset.casePrice == ""){
    //       // selected value goes here
    //
    //     }
    //   }
    //
    //   var caseComponent = parseFloat(caseCost);
    //   var cpuCost = $(".price-cpu").dataset.cpuPrice;
    //   var cpuComponent = parseFloat(cpuCost);
    // };

    customPc.case = $selectedSpec.val();
    // document.getElementById(buildPc[i][1]).innerHTML = buildPc[i][2] + $selecetedSpec.val();
    $(buildPc[i][1]).html(buildPc[i][2] + $selectedSpec.val());
    // document.getElementById("totalCost").innerHTML = "£" + priceTracker();
    console.log($selectedSpec.val());
  });
}
