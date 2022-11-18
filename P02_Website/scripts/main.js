'use strict';

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
