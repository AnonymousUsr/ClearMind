window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 15px";
    document.getElementById("logo").style.fontSize = "18px";
    document.getElementById("navbar-right").style.fontSize = "16px";
  } else {
    document.getElementById("navbar").style.padding = "10px 20px";
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("navbar-right").style.fontSize = "18px";
  }
}

function ValidateSelection() {  
  var check_box = document.getElementsByName("veggies");  
  var CheckedItems = 0; 
  for(var i = 0; i < check_box.length; i++) {  
    if(check_box[i].checked)  
      CheckedItems++;  
  }  
  if (CheckedItems > 3){  
    alert("You did it! Heres to happier days ahead.");  
    return false;
  } 
  else if (CheckedItems > 0) {
    alert("Any progress is good progess :)");  
    return false;
  }  
  else if (CheckedItems == 0) {
    alert("Some days we just don't feel our best. And that's okay.");  
    return false;
  }
}  
