var manCheck = document.getElementById("man");
var womenCheck = document.getElementById("women");
var childrenCheck = document.getElementById("children");

function check() {
  if (manCheck.checked) {
    document.getElementsByClassName("cont-man")[0].style.display = "block";
  } else {
    document.getElementsByClassName("cont-man")[0].style.display = "none";
  }
  if (womenCheck.checked) {
    document.getElementsByClassName("cont-women")[0].style.display = "block";
  } else {
    document.getElementsByClassName("cont-women")[0].style.display = "none";
  }
  if (childrenCheck.checked) {
    document.getElementsByClassName("cont-children")[0].style.display = "block";
  } else {
    document.getElementsByClassName("cont-children")[0].style.display = "none";
  }
  marginAboutUsBlock();
}

function seeAllProduct() {
  manCheck.checked = true;
  womenCheck.checked = true;
  childrenCheck.checked = true;
  check();
}

function marginAboutUsBlock() {
  if (manCheck.checked || womenCheck.checked || childrenCheck.checked)
    document.getElementById("aboutUs").style.marginTop = "130px";
  else document.getElementById("aboutUs").style.marginTop = "0px";

  if (window.matchMedia("(max-width: 860px)").matches) 
    document.getElementById("aboutUs").style.marginTop = "0px";
}

marginAboutUsBlock();
