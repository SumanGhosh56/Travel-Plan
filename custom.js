
var main_header = document.querySelector(".header5")

window.addEventListener("scroll", function () {
   if (window.scrollY >= 112) {
      main_header.classList.add("header6")
   }
   else {
      main_header.classList.remove("header6")
   }
})

var scroll1 = document.querySelector(".scroll_up_down")

window.addEventListener("scroll", function () {
   if (window.scrollY >= 112) {
      scroll1.classList.add("scroll_up_down1")
   }
   else {
      scroll1.classList.remove("scroll_up_down1")
   }
})
var cdn = document.querySelector(".responsive_header10")
window.addEventListener("scroll", function (params) {
   if (window.scrollY >= 50) {
      cdn.classList.add("responsive_header11")
   }
   else {
      cdn.classList.remove("responsive_header11")
   }
})

let loader = document.getElementById("preloader")
window.addEventListener("load", function (params) {

   loader.style.display = "none";
})
//  var popup = document.querySelector(".poupup");
//  var click = document.querySelector(".remove");

//  window.onload = function(){
//    setTimeout(function name(params) {
//       popup.style.display = 'block';
//    }, 2000)
//  }
//  click.addEventListener('click', () =>{
//    popup.style.display = 'none';
//  })