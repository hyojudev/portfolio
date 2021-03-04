
// nav 3btn

$(document).ready(function(){
    
            $('.nav_bt').click(function(){
                $('#nav').animate({
                    right:'0px',
                },'slow');
            });
            
            $('.nav_xbt').click(function(){
                $('#nav').animate({
                    right:'-100%',
                },'slow');
            });
    
    
    // top button
    
    
     function topbt(){
    $('.topbt').animate({bottom:'82px'},1000).animate({bottom:'70px'},1000,topbt)
    };
    topbt();
    
//     function pMove(seq){
//            var offset = $('.intro'+seq).offset()
//            $('html,body').animate({
//                scrollTop:offset.top
//            },400);
//        }
    $('.topbt').click(function(){
        $('html,body').animate({scrollTop:'0'},1000)
    });
        });



// intro1_light


$(document).ready(function(){
   
    $('.n_on').fadeIn(100);
    $('.n_on').fadeOut(100);
    $('.n_on').fadeIn(100);
    $('.n_on').fadeOut(100);
    $('.n_on').fadeIn(100);
    $('.n_on').fadeOut(100);
    $('.n_on').fadeIn(100);
    $('.n_on').fadeOut(100);
    $('.n_on').fadeIn(200);
    $('.n_on').fadeOut(200);
    $('.n_on').fadeIn(200);
    $('.n_on').fadeOut(200);
    $('.n_on').fadeIn(300);
    $('.n_on').fadeOut(300);
    $('.n_on').fadeIn(400);
//    $('.n_on').fadeOut(400);
//    $('.n_on').fadeIn(600);  
//    $('.n_on').fadeOut(800);
//    $('.n_on').fadeIn(900);  
//    $('.n_on').fadeOut(900);
//    $('.n_on').fadeIn(1000);
//    $('.n_on').fadeOut(1000);
//    $('.n_on').fadeIn(2000);
//    $('.n_on').fadeOut(3000);
//    $('.n_on').fadeIn(3500);
    
    
//    var animationName = 'animated bounceIn';
//    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimaionend animationend';
//    
//    $('.n_pineapple').addClass(animationName).one(animationend,function(){
//        $(this).removeClass(animationName);
//    });
//    
//    $('.n_banana').addClass(animationName).one(animationend,function(){
//        
//        $(this).removeClass(animationName);
//        
//    });
    
});

// intro1_colud

$(document).ready(function(){
    
//    $('.n_cloud_l').animate({top:'50px'},2000);
//    $('.n_cloud_l').animate({top:'50px'},2000);
//    $('.n_cloud_l').animate({top:'100px'},2000);
//    $('.n_cloud_l').animate({top:'50px'},2000);
//    
    
    
    function ncloudL(){
        $('.n_cloud_l').animate({top:'-30px'},2000).animate({top:'-10px'},2000,ncloudL)
    };
    ncloudL();
    
     function ncloudR(){
        $('.n_cloud_r').animate({top:'-30px'},2000).animate({top:'-10px'},2000,ncloudR)
    };
    ncloudR();
    
     
});

//intro1_ pineapple & banana

//i=0;
//
//function in1_pineapple(){
//    
//    i++;
//    
//if(i%2==0){
//    
//    $("#rr").css('transform','rotate(70deg)')
//        
//       }else{
//           
//      $("#rr").css('transform','rotate(0deg)')           
//      setTimeout(in1_banana,300);
//            
//}   
//   
//}
//
//k=0;
//function in1_banana(){          
//if(k%2==0){    
//    $("#bb").css('transform','rotate(40deg)')
//    k++;
//        
//       }else{           
//      $("#bb").css('transform','rotate(0deg)')
//      
//}   
//   
//}
//
//setInterval(in1_pineapple,3000)
//
//in1_pineapple();





// intro2_pineapple&colud



$(window).scroll(function(){
    
    
 
    $('.intro2').scrollTop(function(){
        
     function in2pineapple(){
        $('.in2_pineapple').animate({top:'0',opacity:'1'},2000)
    };
        
    in2pineapple();
        
    });
    
     function in2pineapple(){
          $('.in2_cloud').animate({top:'-20px'},2000).animate({top:'7px'},2000,in2pineapple)
     };
    in2pineapple();
   


    
// intro4 _ text _ scroll    
  
    
});


$(window).scroll(function(){
    
    var scroll = $(this).scrollTop();
    //alert(scroll)

$('.intro4').scrollTop(function(){
    
           
        
     function in4text(){
        if(scroll > 2000){
             $('.in4_text1').animate({top:'0',opacity:'1'},2000)
             $('.in4_text2').animate({top:'0',opacity:'1'},2000)
         }
         
         
    };
        
    in4text();
        
    });
});





//intro3 _ slide _bt

       var count=0;
       $('#in3_prev').click(function(){   
            
            if(count<3){
                count+=1;               
               $('.intro3_slide ul').stop().animate({top:'+=-113px'},500)                
                
                }
            
                 
        });
       
      $('#in3_next').click(function(){
            if(count>0){ 
                count-=1;
               $('.intro3_slide ul').stop().animate({top:'+=113px'},500)
               
                 
               }
            
        });

//intro3 _ slide 

  
    $(document).ready(function(){
        
      
         $(".intro3_slide ul li:nth-child(1)").hover(function(){
             
             $('.apple').css('z-index','7');
             $('.banana').css('z-index','6');
             $('.pineapple').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.grape').css('z-index','5');
             $('.lemon').css('z-index','5');
             $('.cherry').css('z-index','5');
             
             $(".apple li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".apple li:nth-child(1) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(2) img").stop().animate({top:"15px"})
             $(".apple li:nth-child(2) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".apple li:nth-child(3) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(4) img").stop().animate({top:"30px"})
             $(".apple li:nth-child(4) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(5) img").stop().animate({left:"50%",top:"20px"})
             $(".apple li:nth-child(5) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(6) img").stop().animate({top:"15px"})
             $(".apple li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".apple li:nth-child(7) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(8) img").stop().animate({top:"15px"})
             $(".apple li:nth-child(8) p").stop().animate({bottom:"0px"})
             
             $(".apple li:nth-child(9) img").stop().animate({top:"15px"})
             $(".apple li:nth-child(9) p").stop().animate({bottom:"0px"})
           
        },function(){
            // $('.apple').css('z-index','6');
             
             $(".apple li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".apple li:nth-child(1) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".apple li:nth-child(2) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(3) img").stop().animate({left:"500px"})
             $(".apple li:nth-child(3) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(4) img").stop().animate({top:"200px"})
             $(".apple li:nth-child(4) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".apple li:nth-child(5) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".apple li:nth-child(6) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(7) img").stop().animate({left:"500px"})
             $(".apple li:nth-child(7) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".apple li:nth-child(8) p").stop().animate({bottom:"-30px"})
             
             $(".apple li:nth-child(9) img").stop().animate({top:"500px"})
             $(".apple li:nth-child(9) p").stop().animate({bottom:"-30px"})
             
           
             
         });
        
        $(".intro3_slide ul li:nth-child(2)").hover(function(){
            
             $('.banana').css('z-index','7');
             $('.apple').css('z-index','6');
             $('.pineapple').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.grape').css('z-index','5');
             $('.lemon').css('z-index','5');
             $('.cherry').css('z-index','5');
            
             $(".banana li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".banana li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(2) img").stop().animate({top:"10px"})
             $(".banana li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".banana li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(4) img").stop().animate({top:"10px"})
             $(".banana li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".banana li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(6) img").stop().animate({top:"10px"})
             $(".banana li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".banana li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".banana li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(8) img").stop().animate({top:"10px"})
             $(".banana li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".banana li:nth-child(9) img").stop().animate({top:"10px"})
             $(".banana li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".banana li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".banana li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".banana li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(3) img").stop().animate({left:"500px"})
             $(".banana li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".banana li:nth-child(4) img").stop().animate({top:"200px"})
             $(".banana li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".banana li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".banana li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(7) img").stop().animate({left:"500px"})
             $(".banana li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".banana li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".banana li:nth-child(9) img").stop().animate({top:"500px"})
             $(".banana li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
        
        
        $(".intro3_slide ul li:nth-child(3)").hover(function(){
            
             $('.watermelon').css('z-index','7');
             $('.apple').css('z-index','6');
             $('.banana').css('z-index','5');
             $('.grape').css('z-index','5');
             $('.pineapple').css('z-index','5');
             $('.lemon').css('z-index','5');
             $('.cherry').css('z-index','5');
            
             $(".watermelon li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".watermelon li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(2) img").stop().animate({top:"10px"})
             $(".watermelon li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".watermelon li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(4) img").stop().animate({top:"10px"})
             $(".watermelon li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".watermelon li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(6) img").stop().animate({top:"10px"})
             $(".watermelon li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".watermelon li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".watermelon li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(8) img").stop().animate({top:"10px"})
             $(".watermelon li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".watermelon li:nth-child(9) img").stop().animate({top:"10px"})
             $(".watermelon li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".watermelon li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".watermelon li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".watermelon li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(3) img").stop().animate({left:"500px"})
             $(".watermelon li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".watermelon li:nth-child(4) img").stop().animate({top:"200px"})
             $(".watermelon li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".watermelon li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".watermelon li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(7) img").stop().animate({left:"500px"})
             $(".watermelon li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".watermelon li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".watermelon li:nth-child(9) img").stop().animate({top:"500px"})
             $(".watermelon li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
        $(".intro3_slide ul li:nth-child(4)").hover(function(){
            
             $('.pineapple').css('z-index','7');
             $('.apple').css('z-index','6');
             $('.banana').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.grape').css('z-index','5');
             $('.lemon').css('z-index','5');
             $('.cherry').css('z-index','5');
            
             $(".pineapple li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".pineapple li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(2) img").stop().animate({top:"10px"})
             $(".pineapple li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".pineapple li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(4) img").stop().animate({top:"10px"})
             $(".pineapple li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".pineapple li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(6) img").stop().animate({top:"10px"})
             $(".pineapple li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".pineapple li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".pineapple li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(8) img").stop().animate({top:"10px"})
             $(".pineapple li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".pineapple li:nth-child(9) img").stop().animate({top:"10px"})
             $(".pineapple li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".pineapple li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".pineapple li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".pineapple li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(3) img").stop().animate({left:"500px"})
             $(".pineapple li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".pineapple li:nth-child(4) img").stop().animate({top:"200px"})
             $(".pineapple li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".pineapple li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".pineapple li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(7) img").stop().animate({left:"500px"})
             $(".pineapple li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".pineapple li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".pineapple li:nth-child(9) img").stop().animate({top:"500px"})
             $(".pineapple li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
    
        $(".intro3_slide ul li:nth-child(5)").hover(function(){
            
             $('.grape').css('z-index','7');
             $('.pineapple').css('z-index','6');
             $('.apple').css('z-index','5');
             $('.banana').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.lemon').css('z-index','5');
             $('.cherry').css('z-index','5');
            
             $(".grape li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".grape li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(2) img").stop().animate({top:"10px"})
             $(".grape li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".grape li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(4) img").stop().animate({top:"10px"})
             $(".grape li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".grape li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(6) img").stop().animate({top:"10px"})
             $(".grape li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".grape li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".grape li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(8) img").stop().animate({top:"10px"})
             $(".grape li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".grape li:nth-child(9) img").stop().animate({top:"10px"})
             $(".grape li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".grape li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".grape li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".grape li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(3) img").stop().animate({left:"500px"})
             $(".grape li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".grape li:nth-child(4) img").stop().animate({top:"200px"})
             $(".grape li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".grape li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".grape li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(7) img").stop().animate({left:"500px"})
             $(".grape li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".grape li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".grape li:nth-child(9) img").stop().animate({top:"500px"})
             $(".grape li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
        $(".intro3_slide ul li:nth-child(6)").hover(function(){
            
             $('.lemon').css('z-index','7');
             $('.grape').css('z-index','6');
             $('.apple').css('z-index','5');
             $('.banana').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.pineapple').css('z-index','5');
             $('.cherry').css('z-index','5');
            
             $(".lemon li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".lemon li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(2) img").stop().animate({top:"10px"})
             $(".lemon li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".lemon li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(4) img").stop().animate({top:"10px"})
             $(".lemon li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".lemon li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(6) img").stop().animate({top:"10px"})
             $(".lemon li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".lemon li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".lemon li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(8) img").stop().animate({top:"10px"})
             $(".lemon li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".lemon li:nth-child(9) img").stop().animate({top:"10px"})
             $(".lemon li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".lemon li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".lemon li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".lemon li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(3) img").stop().animate({left:"500px"})
             $(".lemon li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".lemon li:nth-child(4) img").stop().animate({top:"200px"})
             $(".lemon li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".lemon li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".lemon li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(7) img").stop().animate({left:"500px"})
             $(".lemon li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".lemon li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".lemon li:nth-child(9) img").stop().animate({top:"500px"})
             $(".lemon li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
        $(".intro3_slide ul li:nth-child(7)").hover(function(){
            
             $('.cherry').css('z-index','7');
             $('.lemon').css('z-index','6');
             $('.apple').css('z-index','5');
             $('.banana').css('z-index','5');
             $('.watermelon').css('z-index','5');
             $('.grape').css('z-index','5');
             $('.pineapple').css('z-index','5');
            
             $(".cherry li:nth-child(1) img").stop().animate({left:"50%",top:"15px"})
             $(".cherry li:nth-child(1) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(2) img").stop().animate({top:"10px"})
             $(".cherry li:nth-child(2) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(3) img").stop().animate({left:"50%",top:"15px"})
             $(".cherry li:nth-child(3) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(4) img").stop().animate({top:"10px"})
             $(".cherry li:nth-child(4) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(5) img").stop().animate({left:"50%",top:"15px"})
             $(".cherry li:nth-child(5) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(6) img").stop().animate({top:"10px"})
             $(".cherry li:nth-child(6) p").stop().animate({bottom:"0px"})
             
             $(".cherry li:nth-child(7) img").stop().animate({left:"50%",top:"15px"})
             $(".cherry li:nth-child(7) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(8) img").stop().animate({top:"10px"})
             $(".cherry li:nth-child(8) p").stop().animate({bottom:"0px"})
            
             $(".cherry li:nth-child(9) img").stop().animate({top:"10px"})
             $(".cherry li:nth-child(9) p").stop().animate({bottom:"0px"})
            
        },function(){
            
            // $('.banana').css('z-index','6');
            
             $(".cherry li:nth-child(1) img").stop().animate({left:"-200px"})
             $(".cherry li:nth-child(1) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(2) img").stop().animate({top:"-200px"})
             $(".cherry li:nth-child(2) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(3) img").stop().animate({left:"500px"})
             $(".cherry li:nth-child(3) p").stop().animate({bottom:"-30px"}) 
             
             $(".cherry li:nth-child(4) img").stop().animate({top:"200px"})
             $(".cherry li:nth-child(4) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(5) img").stop().animate({left:"-200px"})
             $(".cherry li:nth-child(5) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(6) img").stop().animate({top:"-200px"})
             $(".cherry li:nth-child(6) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(7) img").stop().animate({left:"500px"})
             $(".cherry li:nth-child(7) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(8) img").stop().animate({top:"-200px"})
             $(".cherry li:nth-child(8) p").stop().animate({bottom:"-30px"})
            
             $(".cherry li:nth-child(9) img").stop().animate({top:"500px"})
             $(".cherry li:nth-child(9) p").stop().animate({bottom:"-30px"})
         });
        
        
        
        
    });




$(document).ready(function(){
 

    function sub3flag(){
        $('.sub3_flag').animate({top:'-20px'},1000).animate({top:'-5px'},1000,sub3flag)
    };
    sub3flag();
 
    
});



//sub1_slide_text
//
//start();
//
//
//        var imgs = 2;
//        var now=0;
//        
//        function start(){
//            $(".sbu1_mt_text_cover > .mt_text").eq(0).siblings().fadeOut();
//            setInterval(slider , 2800);
//        }
//        
//        function slider(){
//            now = (now ==imgs)? 0 : now+1;
//            $(".sbu1_mt_text_cover > .mt_text").eq(now-1).fadeOut();
//            $(".sbu1_mt_text_cover > .mt_text").eq(now).fadeIn();
//        }
//        
//        
//        var slideIndex =1;
//        show(slideIndex);
//        
//        function plus(n){
//            show(slideIndex +=n)
//        }
//        
//        function show(n){
//            var slides = document.getElementsByClassName("myS");
//            if(n>slides.length){
//                slideIndex = 1
//            }
//            if(n<1){
//            slideIndex = slides.length
//            }
//            
//            for(i=0; i<slides.length; i++){
//               slides[i].style.display = "none";
//                
//            }
//			
//          slides[slideIndex-1].style.display="block"
          
            

// sub3 _ popup 


$(document).ready(function(){
    
    $('.sub3_flag').click(function(){
        $('.sub3_popup').animate({right:'0'},1000)
    });
    
    $(".sub3_xbtn").click(function(){
        $('.sub3_popup').animate({right:'-100%'},1000)
    });
   
    
    
    
});