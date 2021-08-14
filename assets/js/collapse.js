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

function expand() {
  $(".btn-collapse").collapse("show");

  console.log("expand")
}

function collapse() {
  $(".btn-collapse").collapse("hide");

  console.log("collapse")
}
