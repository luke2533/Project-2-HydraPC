// This is where you add the price tracker adds everything

// var casePc = $("input[name='case']");
// var cpuPc = $("input[name='cpu']");
var grandTotal = 0;

var priceTracker = function(){

  var caseCost = $(".price-case").dataset.casePrice;
  var caseComponent = parseFloat(caseCost);

  var cpuCost = $(".price-cpu").dataset.cpuPrice;
  var cpuComponent = parseFloat(cpuCost);

  var total = caseComponent + cpuComponent;
  total += grandTotal;
};

// console.log(caseCost);
// console.log(typeof cpuCost);

document.getElementById("totalCost").innerHTML = "£" + priceTracker();







// var priceTracker = function(){
//     // var priceCase = $(this).find(".price-case").text();
//     // return parseFloat(priceCase);
//     // parseFloat(priceCase);
//     // var priceCpu = $(this).find(".price-cpu").text();
//     // return parseFloat(priceCpu);
//     // parseFloat(priceCpu);
// // dont delete yet
//
//     var priceCase = parseFloat(document.getElementsByClassName("price-case"));
//     var priceCpu = parseFloat(document.getElementsByClassName("price-cpu"));
//
// // put back onto input (lable maybe)
//
//     var total = priceCase + priceCpu;
//     total += grandTotal;
//
//
// };
// document.getElementById("totalCost").innerHTML = "£" +  grandTotal;
// // priceTracker();
// console.log(priceTracker);
