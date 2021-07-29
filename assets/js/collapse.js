var btnCollapse = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < btnCollapse.length; i++) {
  btnCollapse[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var collapse = this.nextElementSibling;
    if (collapse.style.display === "block"){
      collapse.style.display = "none";
    } else {
      collapse.style.display = "block";
    }
  });
}

// function collapseAll(){
//   $(".collapseAll").collapse("show");
//             ANOTHER ATTMEPT
// }

//                             ATTEPMT AT COLLAPSE ALL
// var btnCollapseAll = document.getElementsByClassName("btn-tracker");
// var x;
// for (x = 0; x < btnCollapseAll.length; x++) {
//   btnCollapseAll[x].addEventListener("click", function(){
//     this.classList.toggle("active");
//     var collapseAll = this.nextElementSibling;
//     if (collapseAll.style.display === "block"){
//       collapseAll.style.display = "none";
//     } else {
//       collapseAll.style.display = "block"
//     }
//   });
// }
