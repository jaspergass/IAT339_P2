"use strict";

// Code adapted from https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

// Product quantity counter script. from https://dev.to/stackfindover/products-quantity-counter-using-html-css-javascript-663
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value)? 0 : value;
  value ++;
  input.value = value;
}
function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value)? 0 : value;
    value --;
    input.value = value;
  }
}

// Rotating Banner
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function(){
  bannerLoop();
}

var startBannerLoop = setInterval(function(){
  bannerLoop();
}, bannerTimer);

function bannerloop(){
  if (bannerStatus === 1){
    document.getElementById("imgban2").style.opacity = "0";
    setTimeout(function(){
      document.getElementById("imgban1").style.right = "0px";
      document.getElementById("imgban1").style.zIndex = "1000";
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "1500";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "500";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban2").style.opacity = "1";
    }, 1000);
    bannerStatus = 2;
  }
  else if (bannerStatus === 2){
    document.getElementById("imgban3").style.opacity = "0";
    setTimeout(function(){
      document.getElementById("imgban2").style.right = "0px";
      document.getElementById("imgban2").style.zIndex = "1000";
      document.getElementById("imgban3").style.right = "-1200px";
      document.getElementById("imgban3").style.zIndex = "1500";
      document.getElementById("imgban1").style.right = "1200px";
      document.getElementById("imgban1").style.zIndex = "500";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban3").style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  }
  else if (bannerStatus === 3){
    document.getElementById("imgban1").style.opacity = "0";
    setTimeout(function(){
      document.getElementById("imgban3").style.right = "0px";
      document.getElementById("imgban3").style.zIndex = "1000";
      document.getElementById("imgban1").style.right = "-1200px";
      document.getElementById("imgban1").style.zIndex = "1500";
      document.getElementById("imgban2").style.right = "1200px";
      document.getElementById("imgban2").style.zIndex = "500";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban1").style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}

