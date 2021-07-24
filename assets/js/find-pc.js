// var $findPc = $("input[name='budget']");
// $findPc.change(function(){
//   var $checked = $findPc.filter(function(){
//     return $(this).prop("checked");
//   });
//   console.log($checked.val());
// });


var $findPc = $("input[name='budget'], input[name='gpu'], input[name='cpu'], input[name='setting']");
$findPc.change(function(){
  var $checked = $findPc.filter(function(){
    return $(this).prop("checked");
  });
  if(this.prePC.budget == "2"){

  }
});


  // Above it perfectish minus weird problem
  //console.log(prePC.prePC1.budget);
  //console.log($checked.val());




// $(prePC.prePC1.name).text("Hello luke");
// console.log(prePC.prePC1.name);



// Possible use for the PC cards
// $("#card-panel-2").click(function(){
//     $("#card-panel-2").hide("medium");
// });
