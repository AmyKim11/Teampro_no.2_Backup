let hidenave = $(".hide-nave");
let submenu = $(".hide-nav-texts");
let aTag = $(".hide-nav-con-wrap ul li")
console.log(aTag);
// html dom 이 다 로딩된 후 실행된다.    
$(document).ready(function(){
   // menu 클래스 바로 하위에 있는 태그를 클릭했을때        
   $(".hamburger-menu").click(function(){
   
      if(hidenave.css("display") == "none"){
        hidenave.fadeIn(900);
        submenu.fadeIn(900);
      }
      else{
        hidenave.fadeOut(900);
        submenu.fadeOut(900);
      }
   });

   $(aTag).click(function(){
      hidenave.hide();
      submenu.hide();
   })

});