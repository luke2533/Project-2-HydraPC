// var $findPc = $("input[name='budget']");
// $findPc.change(function(){
//   var $checked = $findPc.filter(function(){
//     return $(this).prop("checked");
//   });
//   console.log($checked.val());
// });


// COME BACK TO THIS

var $findPc = $("input[name='filter']");
$findPc.change(function(){
  var $checked = $findPc.filter(function(){
    return $(this).prop("checked");
  });
  // if  ($findPc != ".low"){
  //   $(this).css("clear: both;")
  // }

  console.log($checked.val());
});


// COME BACK TO THIS




// Possible use for the PC cards
// $("#card-panel-2").click(function(){
//     $("#card-panel-2").hide("medium");
// });
