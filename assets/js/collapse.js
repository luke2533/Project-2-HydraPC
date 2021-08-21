// var btnCollapse = document.getElementsByClassName("btn-collapse");
// var i;
//
// for (i = 0; i < btnCollapse.length; i++) {
//   btnCollapse[i].addEventListener("click", function(){
//     this.classList.toggle("active");
//     var collapse = this.nextElementSibling;
//     if (collapse.style.display === "block"){
//       collapse.style.display = "none";
//     } else {
//       collapse.style.display = "block";
//     }
//   });
// }

function expand() {
   $(".collapse").collapse("show");
}
function collapse() {
  $(".collapse").collapse("hide");
}
