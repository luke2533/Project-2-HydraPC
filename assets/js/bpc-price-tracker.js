// // This is where you add the price tracker adds everything
//
// var casePc = $("input[name='case']");
// var cpuPc = $("input[name='cpu']");
var grandTotal = 0;

var priceTracker = function(){

  // var caseCost = $(".price-case").dataset.casePrice;
  var caseCostArray = $(".price-case");
  for(var i = 1; i < caseCostArray.length; i ++){
    if (caseCostArray[i].value == ""){
      // selected value goes here
    }
  }
  console.log(caseCost);
  var caseComponent = parseFloat(caseCost);

  var cpuCost = $(".price-cpu").dataset.cpuPrice;
  var cpuComponent = parseFloat(cpuCost);

  var total = caseComponent + cpuComponent;
  total += grandTotal;
};

// console.log(caseCost);
// console.log(typeof cpuCost);

document.getElementById("totalCost").innerHTML = "£" + priceTracker();
