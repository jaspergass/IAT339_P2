"use strict";

// Code adapted from https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

