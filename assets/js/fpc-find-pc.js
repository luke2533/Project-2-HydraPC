
// COME BACK TO THIS
var $findPc = $("input[name='filter']");
$findPc.change(function(){
  var $checked = $findPc.filter(function(){
    return $(this).prop("checked");
  });

  var $lowPc = $(".low");
  var $midPc = $(".mid");
  var $topPc = $(".top");
  var $gpuNPc = $(".gpu-nvidia");
  var $gpuAPc = $(".gpu-amd");
  var $cpuIPc = $(".cpu-intel");
  var $cpuAPc = $(".cpu-amd");
  var $mediumPc = $(".medium");
  var $highPc = $(".high");
  var $ultraPc = $(".ultra");

// A loop is problably nessary as well as a data-*

  if ($lowPc === $checked.val()){
    $lowPc.css("display", "block")
  }
  else if ($lowPc != $checked.val()){
    $lowPc.css("display", "none");
  }

  else if ($midPc === $checked.val()){
    $midPc.css("display", "block")
  }
  else if ($midPc != $checked.val()){
    $midPc.css("display", "block")
  }

  else if ($topPc === $checked.val()){
    $topPc.css("display", "block")
  }
  else if ($topPc != $checked.val()){
    $topPc.css("display", "block")
  }

  else if ($gpuNPc === $checked.val()){
    $gpuNPc.css("display", "block")
  }
  else if ($gpuNPc != $checked.val()){
    $gpuNPc.css("display", "block")
  }

  else if ($gpuAPc === $checked.val()){
    $gpuAPc.css("display", "block")
  }
  else if ($gpuAPc != $checked.val()){
    $gpuAPc.css("display", "block")
  }

  else if ($cpuIPc === $checked.val()){
    $cpuIPc.css("display", "block")
  }
  else if ($cpuIPc != $checked.val()){
    $cpuIPc.css("display", "block")
  }

  else if ($cpuAPc === $checked.val()){
    $cpuAPc.css("display", "block")
  }
  else if ($cpuAPc != $checked.val()){
    $cpuAPc.css("display", "block")
  }

  else if ($mediumPc === $checked.val()){
    $mediumPc.css("display", "block")
  }
  else if ($mediumPc != $checked.val()){
    $mediumPc.css("display", "block")
  }

  else if ($highPc === $checked.val()){
    $highPc.css("display", "block")
  }
  else if ($highPc != $checked.val()){
    $highPc.css("display", "block")
  }

  else if ($ultraPc === $checked.val()){
    $ultraPc.css("display", "block")
  }
  else if ($ultraPc != $checked.val()){
    $ultraPc.css("display", "block")
  };
  console.log($checked.val());
});


// COME BACK TO THIS
