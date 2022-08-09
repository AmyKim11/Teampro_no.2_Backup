// header 스크롤시 배경 색 변화
$(document).ready(function(){
   $(window).scroll(function(){
     var scroll = $(window).scrollTop();
     if (scroll > 1) {
       $("header ").css("background" , "#FFFF");
       $(".nav-text li a").css("color" , "#000000");
       $(".ci-logo img").css("filter" , "none");
       $(".hamburger-menu").css("background-image" , "url('./img/nav/hamburger_menu_black.svg')");
     }
     else{
       $("header").css("background" , "transparent");
       $(".nav-text li a").css("color" , "#FFFF");   
       $(".ci-logo img").css("filter" , "invert(100%) sepia(100%) saturate(2%) hue-rotate(190deg) brightness(102%) contrast(101%)");
       $(".hamburger-menu").css("background-image" , "url('./img/nav/hamburger_menu.svg')");
     }
   })
 })