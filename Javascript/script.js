//function myFunction() {
//    var x = document.getElementById("topnav");
//    if (x.className === "navbar") {
//        x.className += " responsive";
//    } else {
//        x.className = "navbar";
//    }
//}
//


$(document).ready(function(){
   $('.menutoggle').click(function(){
       $('nav').toggleClass('active')
   });
});

$(window).resize(function(){
   if($(window).width() < 768){
       $('topnav').style.background = "rgba(64, 62, 60, 0.9)";
//       topnav.style.background = "rgba(64, 62, 60, 0.9)";
//       $("topnav").style.background ("rgba(64, 62, 60, 0.9)");
   }
});


    var  header = document.getElementById('topnav');
    let color= document.querySelector('topnav');
      
//    var  div = document.getElementById('menutoggle');
//    let color = document.querySelector('menutoggle');

      window.onscroll = function(){

      	if (window.pageYOffset >10) {
            
//            menutoggle.style.padding = "10px 40px";
      		topnav.style.background = "rgba(64, 62, 60, 0.9)";
            topnav.style.padding="10px 20px";
            topnav.style.height="80px";
            topnav.style.fontFamily="cursive";
            topnav.style.textTransform="capitalize";
            
//            topright.style.a.active.background = "gray";
//            topnav.style.width="100px";
      		// topnav.style.boxShadow = "0px 4px 2px brown";
      	}
      	else{
//            menutoggle.style.padding="0px";
            topnav.style.fontFamily="segoe ui";
      		topnav.style.background = "transparent";
            topnav.style.textTransform="Uppercase";
      		topnav.style.boxShadow = "none";
            topnav.style.height="55px";
            topnav.style.padding="10px";
            topnav.style.width="100%";
      	}
      }
      
      
      $(document).ready(function(){
          //show hide the button on scroll
          $(window).scroll(function(){
              if($(this).scrollTop() > 200){
                  $('.scrollToTop').fadeIn();
              }else{
                  $('.scrollToTop').fadeOut();
              }
          });
          // smoth scrolling to top
            $('.scrollToTop').click(function(){
                $('html, body').animate({scrollTop: 0}, 1000) //set animation time
            });
      });