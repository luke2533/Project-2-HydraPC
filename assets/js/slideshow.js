// https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp Bootstrap JS carousel w3schools walkthrough
// https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_ref_js_carousel_interval carousel options w3schools

$(document).ready(function(){
  // Activate Carousel with a specified interval
  $("#hydra-slide").carousel({interval: 4500});

  // Enable Carousel Indicators
  $(".slide-1").click(function(){
    $("#hydra-slide").carousel(0);
  });
  $(".slide-2").click(function(){
    $("#hydra-slide").carousel(1);
  });
  $(".slide-3").click(function(){
    $("#hydra-slide").carousel(2);
  });
  $(".slide-3").click(function(){
    $("#hydra-slide").carousel(3);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#hydra-slide").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#hydra-slide").carousel("next");
  });
});
