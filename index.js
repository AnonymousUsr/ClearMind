window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 15px";
    document.getElementById("logo").style.fontSize = "18px";
    document.getElementById("navbar-right").style.fontSize = "16px";
  } else {
    document.getElementById("navbar").style.padding = "5px 20px";
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("navbar-right").style.fontSize = "18px";
  }
}