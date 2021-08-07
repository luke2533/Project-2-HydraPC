// https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp Bootstrap JS carsoul w3schools walkthrough

$(document).ready(function(){
  $("#hydra-slide").carousel();

  $(".carousel-item1").click(function(){
    $("#hydra-slide").carousel(0);
  });
  $(".carousel-item2").click(function(){
    $("#hydra-slide").carousel(1);
  });
  $(".carousel-item3").click(function(){
    $("#hydra-slide").carousel(2);
  });
  $(".carousel-item4").click(function(){
    $("#hydra-slide").carousel(3);
  });


  $(".carousel-control-prev").click(function(){
    $("#hydra-slide").carousel("prev");
  });

  $(".carousel-control-next").click(function(){
    $("#hydra-slide").carousel("next");
  });
});
