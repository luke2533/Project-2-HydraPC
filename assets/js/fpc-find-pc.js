
// COME BACK TO THIS

var $findPc = $("input[name='filter']");
$findPc.change(function(){
  var $checked = $findPc.filter(function(){
    return $(this).prop("checked");
  });

  console.log($checked.val());
});


// COME BACK TO THIS
