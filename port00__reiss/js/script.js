      var wh;
       wh = $(window).height();
       $('.wh').height(wh);  
        
       $("#bt_close").click(function(){
          $("#navi").animate({left:'-50%',opacity:0},500) 
       }); 
       $("#navi_bt").click(function(){
          $("#navi").animate({left:'0',opacity:1},500) 
       });
       $("#pop1_bt").click(function(){
          $(".pop1_slider").fadeIn() 
       }); 
        
       $("#pop2_bt").click(function(){
          $(".pop2_slider").fadeIn() 
       }); 
        
       $("#bt_pop1_close").click(function(){
          $(".pop1_slider").fadeOut()  
       }) 
        
        $("#bt_pop2_close").click(function(){
          $(".pop2_slider").fadeOut()  
       }) 
        
        $("#bt_section2").click(function(){
            $("#navi").animate({left:'-50%',opacity:0},500)
        });
        
        $("#bt_section1").click(function(){
            $(".pop3_slider").fadeOut();
            $("#navi").animate({left:'-50%',opacity:0},500)
        });
        
        
        
        
        /* main slider */    
        
        start();
        var imgs = 2;
        var now=0;
        
        function start(){
            $(".main-slideimg > img").eq(0).siblings().fadeOut();
            setInterval(slider , 2800);
        }
        
        function slider(){
            now = (now ==imgs)? 0 : now+1;
            $(".main-slideimg > img").eq(now-1).fadeOut();
            $(".main-slideimg > img").eq(now).fadeIn();
        }
        
        
        var slideIndex =1;
        show(slideIndex);
        
        function plus(n){
            show(slideIndex +=n)
        }
        
        function show(n){
            var slides = document.getElementsByClassName("myS");
            if(n>slides.length){
                slideIndex = 1
            }
            if(n<1){
            slideIndex = slides.length
            }
            
            for(i=0; i<slides.length; i++){
               slides[i].style.display = "none";
                
            }
			
          slides[slideIndex-1].style.display="block"
            
        }
            
        
        
        
         /*  intro2_scrolltop  */
        
         $(window).scroll(function(){
             
            $('.intro2').scrollTop(function(){

             function intro2(){
                $(".intro2_left_text").animate({top:'0px',opacity:'1'},1200) ;
                $(".intro2_img01>img").animate({top:'-165px',opacity:'1'},2100) ;
                $(".intro2_img02>img").animate({top:'0px',opacity:'1'},2300) ;
                $(".intro2_img03>img").animate({top:'0px',opacity:'1'},2500) ;
            };

            intro2();

            });     
             
        });

        
        
           /*  intro3_nav change  */
        
            function change(seg){
                var pop3 = $(".pop3_slider"+seg);
                $(pop3).css({display : 'block'});
                $(pop3).siblings().css({display:'none'})

            }
        
 

        
         /* intro3_nav */
        
        $('ul.intro_nav li').click(function(){
            
            $(this).animate({left:'0px'})
            
            $(this).animate().siblings().animate({left: '-27px'})
            
        });
        
        
        
        /* intro3_slide_intro_T */
        
        function changeT(seg){
            var slider2 = $(".simg"+seg);
            $(slider2).css({display : 'block'});
            $(slider2).siblings().css({display : 'none'})
            clearInterval(slider2)
        }
        
        start2();
        var imgs2 = 1;
        var now2 = 0;
        
        function start2(){
            $(".pop3_slide img").eq(0).siblings().fadeOut();
            setInterval(slider2 , 3000);
        }
        
        function slider2(){
            now2 = (now2 ==imgs2)? 0 : now2+1;
            $(".pop3_slide img").eq(now2-1).fadeOut();
            $(".pop3_slide img").eq(now2).fadeIn();
        }
        
        
        var slideIndex2 =1;
        show2(slideIndex2);
        
        function plus2(n){
            show2(slideIndex2 +=n)
        }
        
        function show2(n){
            var slides2 = document.getElementsByClassName("pop3S");
            if(n>slides2.length){
                slideIndex2 = 1
            }
            if(n<1){
            slideIndex2 = slides2.length
            }
            
            for(i=0; i<slides2.length; i++){
                slides2[i].style.display = "none";
            }
            
           slides2[slideIndex2-1].style.display = "block"
        }
        
      

        $('.intro_nav .m1').click(function(){

           $('.pop3_slider1 .initial_left').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider1 .pop3_slide').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider1 .pop3_initial span').animate({left:'0px', opacity:'1'},1600);
           $('.pop3_slider1 .initial_right').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider1 .quote_text').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider1 .simg3').css({display : 'block'});   

       });



        
      

        /* intro3_slide_intro_P */
        
        function changeP(seg){
            var sliderP = $(".simg"+seg);
            $(sliderP).css({display : 'block'});
            $(sliderP).siblings().css({display : 'none'})
        }
        
        startP();
        var imgsP = 1;
        var nowP = 0;
        
        function startP(){
            $(".pop3_slide img").eq(0).siblings().fadeOut();
            setInterval(sliderP , 1000);
        }
        
        function sliderP(){
            nowP = (nowP ==imgsP)? 0 : nowP+1;
            $(".pop3_slide img").eq(nowP-1).fadeOut();
            $(".pop3_slide img").eq(nowP).fadeIn();
        }
        
        
       var slideIndexP =1;
        show2(slideIndex2);
        
        function plusP(n){
            showP(slideIndexP +=n)
        }
        
        function showP(n){
            var slidesP = document.getElementsByClassName("pop3S");
            if(n>slidesP.length){
                slideIndexP = 1
            }
            if(n<1){
            slideIndexP = slidesP.length
            }
            
            for(i=0; i<slidesP.length; i++){
                slidesP[i].style.display = "none";
            }
            
           slidesP[slideIndexP-1].style.display = "block"
        }






       $('.intro_nav .m2').click(function(){
           
           $('.pop3_slider2 .initial_left').animate({top:'0px', opacity:'1'},800);
	       $('.pop3_slider2 .pop3_slide').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider2 .pop3_initial span').animate({left:'0px', opacity:'1'},1600);
           $('.pop3_slider2 .initial_right').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider2 .quote_text').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider2 .simg3').css({display : 'block'});     

           });

      

       $('.intro_nav .m3').click(function(){
           
           $('.pop3_slider3 .initial_left').animate({top:'0px', opacity:'1'},800);
	       $('.pop3_slider3 .pop3_slide').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider3 .pop3_initial span').animate({left:'0px', opacity:'1'},1600);
           $('.pop3_slider3 .initial_right').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider3 .quote_text').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider3 .simg5').css({display : 'block'})
    
        });

        $('.intro_nav .m4').click(function(){
           
           $('.pop3_slider4 .initial_left').animate({top:'0px', opacity:'1'},800);
	       $('.pop3_slider4 .pop3_slide').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider4 .pop3_initial span').animate({left:'0px', opacity:'1'},1600);
           $('.pop3_slider4 .initial_right').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider4 .quote_text').animate({top:'0px', opacity:'1'},1200);
            $('.pop3_slider4 .simg7').css({display : 'block'})

           });

         $('.intro_nav .m5').click(function(){
           
           $('.pop3_slider5 .initial_left').animate({top:'0px', opacity:'1'},800);
	       $('.pop3_slider5 .pop3_slide').animate({top:'0px', opacity:'1'},800);
           $('.pop3_slider5 .pop3_initial span').animate({left:'0px', opacity:'1'},1600);
           $('.pop3_slider5 .initial_right').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider5 .quote_text').animate({top:'0px', opacity:'1'},1200);
           $('.pop3_slider5 .simg9').css({display : 'block'})

           });
        


       
        //scroll coordinate
        
        $(window).scroll(function () {
			var height = $(document).scrollTop();
			log(height);
	    });

          function log(str){
              $('#log').text(str);
          }
        
        