        //sub_right slide01

        function change3(seg){
            var slider3 = $(".sub_simg"+seg);
            $(slider3).css({display : 'block'});
            $(slider3).siblings().css({display : 'none'})
            clearInterval(slider3)
        }
        
        start3();
        var imgs3 = 2;
        var now3 = 0 ;
        
        function start3(){
            $(".sub_right1 .sub_slide_img img1").eq(0).siblings().fadeOut();
            setInterval(slider3 ,2000);
        }
        
        function slider3(){
            now3 = (now3 == imgs3)? 0 : now3+=1;
            $(".sub_right1 .sub_slide_img1 img").eq(now3-1).fadeOut();
            $(".sub_right1 .sub_slide_img1 img").eq(now3).fadeIn();
        }
        
        
        var slideIndex3 = 1 ;
        show3(slideIndex3);
        
        function plus3(n){
            show3(slideIndex3 +=n)
        }
        
        function show3(n){
            var slides3 = document.getElementsByClassName("subs");
            if(n>slides3.length){
                slideIndex3 = 1
            }
            if(n<1){
            slideIndex3 = slides3.length
            }
            
            for(i=0; i<slides3.length; i++){
                slides3[i].style.display = "none";
            }
            
            slides3[slideIndex3-1].style.display="block"
        }


      //sub_right slide02

        function change4(seg){
            var slider4 = $(".sub_simg"+seg);
            $(slider4).css({display : 'block'});
            $(slider4).siblings().css({display : 'none'})
            clearInterval(slider4)
        }
        
        start4();
        var imgs4 = 2;
        var now4 = 0 ;
        
        function start4(){
            $(".sub_right2 .sub_slide_img2 img").eq(0).siblings().fadeOut();
            setInterval(slider4 ,2000);
        }
        
        function slider4(){
            now4 = (now4 == imgs4)? 0 : now4+=1;
            $(".sub_right2 .sub_slide_img2 img").eq(now4-1).fadeOut();
            $(".sub_right2 .sub_slide_img2 img").eq(now4).fadeIn();
        }
        
        
        var slideIndex4 = 1 ;
        show4(slideIndex4);
        
        function plus4(n){
            show4(slideIndex4 +=n)
        }
        
        function show4(n){
            var slides4 = document.getElementsByClassName("subs2");
            if(n>slides4.length){
                slideIndex4 = 1
            }
            if(n<1){
            slideIndex4 = slides4.length
            }
            
            for(i=0; i<slides4.length; i++){
                slides4[i].style.display = "none";
            }
            
            slides4[slideIndex4-1].style.display="block"
        }


     //sub_right slide03

        function change5(seg){
            var slider5 = $(".sub_simg"+seg);
            $(slider5).css({display : 'block'});
            $(slider5).siblings().css({display : 'none'})
            clearInterval(slider5)
        }
        
        start5();
        var imgs5 = 2;
        var now5 = 0 ;
        
        function start5(){
            $(".sub_right3 .sub_slide_img3 img").eq(0).siblings().fadeOut();
            setInterval(slider5 ,2000);
        }
        
        function slider5(){
            now5 = (now5 == imgs5)? 0 : now5+=1;
            $(".sub_right3 .sub_slide_img3 img").eq(now5-1).fadeOut();
            $(".sub_right3 .sub_slide_img3 img").eq(now5).fadeIn();
        }
        
        
        var slideIndex5 = 1 ;
        show5(slideIndex5);
        
        function plus5(n){
            show5(slideIndex5 +=n)
        }
        
        function show5(n){
            var slides5 = document.getElementsByClassName("subs3");
            if(n>slides5.length){
                slideIndex5 = 1
            }
            if(n<1){
            slideIndex5 = slides5.length
            }
            
            for(i=0; i<slides5.length; i++){
                slides5[i].style.display = "none";
            }
            
            slides5[slideIndex5-1].style.display="block"
        }

        //sub_right slide04

        function change6(seg){
            var slider6 = $(".sub_simg"+seg);
            $(slider6).css({display : 'block'});
            $(slider6).siblings().css({display : 'none'})
            clearInterval(slider6)
        }
        
        start6();
        var imgs6 = 2;
        var now6 = 0 ;
        
        function start6(){
            $(".sub_right4 .sub_slide_img4 img").eq(0).siblings().fadeOut();
            setInterval(slider6 ,2000);
        }
        
        function slider6(){
            now6 = (now6 == imgs6)? 0 : now6+=1;
            $(".sub_right4 .sub_slide_img4 img").eq(now6-1).fadeOut();
            $(".sub_right4 .sub_slide_img4 img").eq(now6).fadeIn();
        }
        
        
        var slideIndex6 = 1 ;
        show6(slideIndex6);
        
        function plus6(n){
            show6(slideIndex6 +=n)
        }
        
        function show6(n){
            var slides6 = document.getElementsByClassName("subs4");
            if(n>slides6.length){
                slideIndex6 = 1
            }
            if(n<1){
            slideIndex6 = slides6.length
            }
            
            for(i=0; i<slides6.length; i++){
                slides6[i].style.display = "none";
            }
            
            slides6[slideIndex6-1].style.display="block"
        }

        //sub_right slide05

        function change7(seg){
            var slider7 = $(".sub_simg"+seg);
            $(slider7).css({display : 'block'});
            $(slider7).siblings().css({display : 'none'})
            clearInterval(slider7)
        }
        
        start7();
        var imgs7 = 2;
        var now7 = 0 ;
        
        function start7(){
            $(".sub_right5 .sub_slide_img5 img").eq(0).siblings().fadeOut();
            setInterval(slider7 ,2000);
        }
        
        function slider7(){
            now7 = (now7 == imgs7)? 0 : now7+=1;
            $(".sub_right5 .sub_slide_img5 img").eq(now7-1).fadeOut();
            $(".sub_right5 .sub_slide_img5 img").eq(now7).fadeIn();
        }
        
        
        var slideIndex7 = 1 ;
        show7(slideIndex7);
        
        function plus6(n){
            show7(slideIndex7 +=n)
        }
        
        function show7(n){
            var slides7 = document.getElementsByClassName("subs5");
            if(n>slides7.length){
                slideIndex7 = 1
            }
            if(n<1){
            slideIndex7 = slides7.length
            }
            
            for(i=0; i<slides7.length; i++){
                slides7[i].style.display = "none";
            }
            
            slides7[slideIndex7-1].style.display="block"
        }

	 
		// sub_text_button_click
	 
     $(document).ready(function(){
		 
		 $('.sbt1').click(function(){
			 
			 $('.stb1').animate({top:'500px',opacity:'0'},1400)
			 $('.spb1').animate({top:'0px',opacity:'1'},1600) 
		 });
         
         $('.sbt2').click(function(){
			 
			 $('.stb2').animate({top:'500px',opacity:'0'},1400)
			 $('.spb2').animate({top:'0px',opacity:'1'},1600) 
		 });
		 
          $('.sbt3').click(function(){
			 
			 $('.stb3').animate({top:'500px',opacity:'0'},1400)
			 $('.spb3').animate({top:'0px',opacity:'1'},1600) 
		 });
		 
         
          $('.sbt4').click(function(){
			 
			 $('.stb4').animate({top:'500px',opacity:'0'},1400)
			 $('.spb4').animate({top:'0px',opacity:'1'},1600) 
		 });
         
           $('.sbt5').click(function(){
			 
			 $('.stb5').animate({top:'500px',opacity:'0'},1400)
			 $('.spb5').animate({top:'0px',opacity:'1'},1600) 
		 });
		 
		
		 
	 });

       //scroll coordinate
        
        $(window).scroll(function () {
			var height = $(document).scrollTop();
			log(height);
			
	    });

          function log(str){
          $('#log').text(str);
          }