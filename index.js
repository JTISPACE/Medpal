var navLinks = document.getElementById("navLinks");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-300px";
}


var navLinks = document.getElementById("navLinks");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-300px";
}

var checkerBox = document.getElementById("checkerBox");
var chevRight = document.getElementById("chevRight");
var bubble = document.getElementById("bubbleIcon");
function showbox() {
  checkerBox.style.right = "10px";
  checkerBox.style.display = "flex";

  bubble.style.display = "none";
  checkerBox.style.position = "absolute";
}
function hidebox() {
  checkerBox.style.display = "none";
  bubble.style.display = "block";
}
