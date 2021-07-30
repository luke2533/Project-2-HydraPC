const customPc = {
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

var $specCase = $("input[name='case']");
var $specCpu = $("input[name='cpu']");
var $specGpu = $("input[name='gpu']");
var $specMotherboard = $("input[name='motherboard']");
var $specRam = $("input[name='ram']");
var $specPcu = $("input[name='pcu']");
var $specSsd = $("input[name='ssd']");
var $specM2 = $("input[name='m2']");
var $specHdd = $("input[name='hdd']");

$specCase.change(function(){
  var $selectedCase = $specCase.filter(function(){
      return $(this).prop("checked");

  });
  customPc.case = $selectedCase.val()
  document.getElementById("customPc-case").innerHTML = "Case: " + $selectedCase.val();
  console.log($selectedCase.val()); // DELETE LATER
});

// Case

$specCpu.change(function(){
  var $selectedCpu = $specCpu.filter(function(){
      return $(this).prop("checked");

  });
  customPc.cpu = $selectedCpu.val()
  document.getElementById("customPc-cpu").innerHTML = "CPU: " + $selectedCpu.val();
  console.log($selectedCpu.val()); // DELETE LATER
});

// CPU

$specGpu.change(function(){
  var $selectedGpu = $specGpu.filter(function(){
      return $(this).prop("checked");

  });
  customPc.gpu = $selectedGpu.val()
  document.getElementById("customPc-gpu").innerHTML = "GPU: " + $selectedGpu.val();
  console.log($selectedGpu.val()); // DELETE LATER
});

// GPU

$specMotherboard.change(function(){
  var $selectedMotherboard = $specMotherboard.filter(function(){
      return $(this).prop("checked");

  });
  customPc.motherboard = $selectedMotherboard.val()
  document.getElementById("customPc-motherboard").innerHTML = "Motherboard: " + $selectedMotherboard.val();
  console.log($selectedMotherboard.val()); // DELETE LATER
});

// Motherboard

$specRam.change(function(){
  var $selectedRam = $specRam.filter(function(){
      return $(this).prop("checked");

  });
  customPc.ram = $selectedRam.val()
  document.getElementById("customPc-ram").innerHTML = "RAM: " + $selectedRam.val();
  console.log($selectedRam.val()); // DELETE LATER
});

// RAM

$specPcu.change(function(){
  var $selectedPcu = $specPcu.filter(function(){
      return $(this).prop("checked");

  });
  customPc.pcu = $selectedPcu.val()
  document.getElementById("customPc-pcu").innerHTML = "PCU: " + $selectedPcu.val();
  console.log($selectedPcu.val()); // DELETE LATER
});

// PCU

$specSsd.change(function(){
  var $selectedSsd = $specSsd.filter(function(){
      return $(this).prop("checked");

  });
  customPc.ssd = $selectedSsd.val()
  document.getElementById("customPc-ssd").innerHTML = "SSD: " + $selectedSsd.val();
  console.log($selectedSsd.val()); // DELETE LATER
});

// SSD

$specM2.change(function(){
  var $selectedM2 = $specM2.filter(function(){
      return $(this).prop("checked");

  });
  customPc.m2 = $selectedM2.val()
  document.getElementById("customPc-m2").innerHTML = "M.2: " + $selectedM2.val();
  console.log($selectedM2.val()); // DELETE LATER
});

// M.2

$specHdd.change(function(){
  var $selectedHdd = $specHdd.filter(function(){
      return $(this).prop("checked");

  });
  customPc.hdd = $selectedHdd.val()
  document.getElementById("customPc-hdd").innerHTML = "HDD: " + $selectedHdd.val();
  console.log($selectedHdd.val()); // DELETE LATER
});
