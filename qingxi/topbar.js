var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topmenu").style.top = "0";
  } else {
    document.getElementById("topmenu").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}