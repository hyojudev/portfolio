//         $(window).scroll(function(){
//            var scroll = $(window).scrollLeft();
//            if (scroll === 1920) {
//
//                $(".intro2_left_text").animate({top:'0px',opacity:'1'},1200) ;
//
//                }  
//
//                })


        // 가로 값 카운
//        $(window).scroll(function () {
//			var width = $(document).scrollLeft();
//			log(width);
//			
//	    });
//
//          function log(str){
//          $('#log').text(str);
//          }
        
        

// height value
    $(document).ready(function(){
        var wh;
        
        wh=$(window).height();
        
        $(".wh").height(wh);
        
        
        
        
        
        
//        $("#logob").click(function(){           
//            $("#wrap").animate({top:0})
//        })
        
        

        
// nav hover text
        
//        function navHover(Seq){
//            
//            var menu = $('.menu'+seq);
//             $(menu).hover(function(){
//            $('nav li>span').stop().fadeToggle(300);
//        });
//        }
       
        $('.menu1>a').hover(function(){
            $('.menu1 span').stop().fadeToggle(700);
        });
        $('.menu2>a').hover(function(){
            $('.menu2 span').stop().fadeToggle(700);
        });
        $('.menu3>a').hover(function(){
            $('.menu3 span').stop().fadeToggle(700);
        });
        $('.menu4>a').hover(function(){
            $('.menu4 span').stop().fadeToggle(700);
        });
            

    });


$(document).ready(function(){
        
        // scroll 
       $(".scrollBox").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
        });
        
        bgSequence($('#scene01 .poeple1_24'), 10, 89.5, 100);
        bgSequence($('#scene01 .poeple1_18_1'), 10, 125.835, 100);
        bgSequence($('#scene01 .poeple1_20_1'), 10, 74.585, 100);
        bgSequence($('#scene01 .poeple1_27_1'), 10, 80.585, 100);
        bgSequence($('#scene01 .poeple1_11'), 8, 80.585, 200);
        bgSequence($('#scene02 .mainC01'), 4, 186.771, 150);
        bgSequence($('#scene02 .mainC02'), 10,  84.497, 60);
        bgSequence($('#scene03 .poeple3_7'), 8, 80.585, 200);
        bgSequence($('#scene03 .poeple3_19'), 6, 143.368, 200);
        bgSequence($('#scene03 .poeple3_20_1'), 10, 125.835, 100);
        bgSequence($('#scene04 .poeple4_10'), 10, 89.5, 130);
        bgSequence($('#scene04 .poeple4_9'), 6, 94.333, 150);
        bgSequence($('#scene04 .poeple4_18_1'), 10, 74.585, 100);
        bgSequence($('#scene04 .poeple4_17'), 10, 91, 100);
        bgSequence($('#scene04 .poeple4_15'), 10, 61.751, 120);
        bgSequence($('#scene05 .poeple5_11'), 8, 80.585, 120);
        bgSequence($('#scene05 .poeple5_3'), 8, 146.234, 120);
                     // 이미지 총 개수 / 보여지는 이미지 크기 / 속도
                     // 움직이고 싶은 것 계속 추가해서 사용.
        function bgSequence(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum; 
        var posNum = sqSize; 

        function bgAni() {
        if (idx < total) {
            idx++;
            sqName.css({'background-position': 'center ' + (-posNum) + 'px'});
            posNum += sqSize;
        } else {
            idx = 0;
            posNum = sqSize;
        }

        setTimeout(bgAni, speed);
        }

        bgAni();
        }

        
        // cloud movement (repeat)
    
        //scene intro_cloud
        TweenMax.to($('#intro_cloud .in_cloud01'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud02'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud03'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud04'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud05'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud06'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud07'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud08'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud09'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud10'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud11'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#intro_cloud .in_cloud12'), 10, {
                                                 //속도,시간
        marginLeft: 70,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
    
        //scene 01_cloud
        TweenMax.to($('#scene01 .cloud_wrap01 .cloudA .cloudA01'), 10, {
                                                 //속도,시간
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        
        TweenMax.to($('#scene01 .cloud_wrap01 .cloudA .cloudA02'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#scene01 .cloud_wrap01 .cloudA .cloudA03'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#scene01 .cloud_wrap01 .cloudA .cloudA04'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        TweenMax.to($('#scene01 .cloud_wrap01 .cloudA .cloudA05'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        //scene 02_cloud
        TweenMax.to($('#scene02 .cloud_wrap02 .cloudB .cloudB01'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene02 .cloud_wrap02 .cloudB .cloudB02'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene02 .cloud_wrap02 .cloudB .cloudB03'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene02 .cloud_wrap02 .cloudB .cloudB04'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene02 .cloud_wrap02 .cloudB .cloudB05'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        //scene 03_cloud
        TweenMax.to($('#scene03 .cloud_wrap03 .cloudC .cloudC01'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene03 .cloud_wrap03 .cloudC .cloudC02'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene03 .cloud_wrap03 .cloudC .cloudC03'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene03 .cloud_wrap03 .cloudC .cloudC04'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene03 .cloud_wrap03 .cloudC .cloudC05'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
    
        //scene 04_cloud
        TweenMax.to($('#scene04 .cloud_wrap04 .cloudD .cloudD02'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene04 .cloud_wrap04 .cloudD .cloudD03'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene04 .cloud_wrap04 .cloudD .cloudD04'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene04 .cloud_wrap04 .cloudD .cloudD05'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });

        //scene 05_cloud
        TweenMax.to($('#scene05 .cloud_wrap05 .cloudE .cloudE01'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene05 .cloud_wrap05 .cloudE .cloudE03'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene05 .cloud_wrap05 .cloudE .cloudE04'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
        TweenMax.to($('#scene05 .cloud_wrap05 .cloudE .cloudE05'), 10, {
        marginLeft: 100,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Quad.easeInOut
        });
});


    
        window.onload = function(){

        // scene01_bottom - textbox1
        setTimeout(function(){ $('.title1>img').animate({top:'0%',opacity:'1'},600) }, );
        setTimeout(function(){ $('.subtitle1 .day').animate({top:'50%',opacity:'1'},800) }, );
        setTimeout(function(){ $('.text1').animate({top:'67%',opacity:'1'},1100) }, );
            
            
        // scene02_bottom - textbox2
//        setTimeout(function(){ $('.title2>.ST1').animate({top:'0%',opacity:'1'},900) }, 800);
//        setTimeout(function(){ $('.subtitle2>.SST1').animate({top:'50%',opacity:'1'},1100) }, 800);
//        setTimeout(function(){ $('.text3_1').animate({top:'0%',opacity:'1'},1200) }, 800);
//        setTimeout(function(){ $('.text3_bot>img').animate({bottom:'0%',opacity:'1'},1200) }, 800);
           }
         
        $(document).ready(function(){
           
        // scene01_bottom - textbox1_button
        $("#L").click(function(){
            $(".text1").animate({opacity : '1'},500)
            $(".text2").animate({opacity : '0'},500)
            $(".subtitle1 .night").animate({opacity : '0'},500)
            $(".subtitle1 .day").animate({opacity : '1'},500)
            $('.subtitle1 .day').animate({top:'50%',opacity:'1'},500)            
        });
        
        $("#R").click(function(){
            $(".text1").animate({opacity : '0'},500)
            $(".text2").animate({opacity : '1'},500)
            $(".subtitle1 .day").animate({opacity : '0'},500)
            $(".subtitle1 .night").animate({opacity : '1'},500)            
            $('.subtitle1 .night').animate({top:'50%',opacity:'1'},500)
        });
    
        // scene02_bottom - textbox2
//        $("#L2").click(function(){
//            $(".text3").animate({opacity : '1'},500)
//            $(".text4").animate({opacity : '0'},500)
//            $(".subtitle2 .SST1").animate({opacity : '1'},500)
//            $(".subtitle2 .SST2").animate({opacity : '0'},500)
//            $('.subtitle2 .SST1').animate({top:'50%',opacity:'1'},500)            
//        });
//        
//        $("#R2").click(function(){
//            $(".text3").animate({opacity : '0'},500)
//            $(".text4").animate({opacity : '1'},500)
//            $(".subtitle2 .SST1").animate({opacity : '0'},500)
//            $(".subtitle2 .SST2").animate({opacity : '1'},500)            
//            $('.subtitle2 .SST2').animate({top:'50%',opacity:'1'},500)
//        });
        
            
        });    

        $(document).ready(function(){

        // #scene04_fadeToggle
        setInterval(function(){
          $(".poeple4_2").animate({opacity:'0.4'},800);
          $(".poeple4_2").animate({opacity:'0.7'},800);
        }, 250);
            
        // #scene05_fadeToggle           
                setInterval(function(){
          $(".poeple5_5").toggle();
        }, 250);

        $('.poeple5_4').click(function(){
            /*$('.textbox5_black').animate({opacity:'1',zIndex:'99'}).queue(function(){*/
            $('.textbox5_black').fadeIn('fast', function(){
                 $('.textbox5').css({ display: 'block', opacity: 0}).animate({top:'50%',opacity:'1'},500).queue(function(){
                     
                     $('.title5').animate({top:'5%',opacity:'1'},500).queue(function(){
                         $('.text8').animate({top:'0',opacity:'1'},500);       
                         $('.text9').animate({top:'0',opacity:'1'},500);
                         $(this).dequeue(); //★
                         
                         $('.text10').animate({top:'0',opacity:'1'},500).queue(function(){
                            $('.text11').animate({top:'112%',opacity:'1'},500);
                             $(this).dequeue();//★
                         });
                     });
                     
                     $(this).dequeue();
                });
                
            });

        }); 
            
       $('#aaa').click(function(){
            
           // $('.textbox5').css("display",'none')           
           // $('.textbox5_black').animate({opacity:'0',zIndex:'40'});
            
           $('.textbox5_black').fadeOut();
           $('.textbox5').animate({ top: 0, opacity: 0 }, 500, function() {
               $(this).hide(); //★
           });
                     
           
        }); 
    });


        // 위치에 따른 모션


    $(document).ready(function(){
        
//        $('.menu1')        
        
        
         $("#L2").click(function(){
            
            //alert('ddddd')
            $(".text3").animate({opacity : '1'},500)
            $(".text4").animate({opacity : '0'},500)
            $('.title2 .SS1').animate({top:'0%',opacity:'1'},500)  
            $('.title2 .SS2').animate({opacity:'0'},500)  
            $(".subtitle2 .SST1").animate({top:'50%',opacity:'1'}, 500)
            $(".subtitle2 .SST2").animate({opacity :'0'}, 500)
            //$('.subtitle2 .SST1').animate({top:'50%',opacity:'1'},500)          
                      
        });
        
        $("#R2").click(function(){            
           
            $(".text3").animate({opacity : '0'},500)
            $(".text4").animate({opacity : '1'},500)
            $('.title2 .SS2').animate({top:'0%',opacity:'1'},500)  
            $('.title2 .SS1').animate({opacity:'0'}) 
            $(".subtitle2 .SST1").animate({opacity : '0'}, 500)
//            $(".subtitle2 .SST2").animate({opacity : '1'},500)            
            $('.subtitle2 .SST2').animate({top:'50%',opacity:'1'}, 500)
            
            
        });
        
        
        

 
        var a = $(".scrollBox").on('scroll',function(){
        var left = $(this).scrollLeft();
        var top = $(this).scrollTop();
        $(".box").text("left"+left+"top"+top)
        
//         // nav
//        if(left>600){            
//            $(".menu1").animate({
//                "top":'12%',
//                "opacity" : '1'
//            },900)
//        
//        }
        
        
        
         // #scene02_Main Text(DOG SPORTS)
        
        if(left>600){            
            $(".mainText_dogSports").animate({
                "top":'12%',
                "opacity" : '1'
            })
        
        }
        
        // #scene02_textbox2_motion
        
        if(left>1700){            
            $(".title2>.SS1").animate({
                "top":'0%',
                "opacity" : '1'
            })
            
            $('#scene02').data('active', true)
//
//            setTimeout(function(){ $('.title2>.ST1').animate({top:'0%',opacity:'1'},100)});
            
            if ($('#scene02').data('active') && !$('#scene02').data('show')) {
                
                $('#scene02').data('show', true);
                
                $('.subtitle2>.SST1').animate({top:'50%',opacity:'1'},600);

                setTimeout(function(){ $('.text3_1').animate({top:'0%',opacity:'1'},600)});
                setTimeout(function(){ $('.text3_bot>img').animate({bottom:'0%',opacity:'1'},600) });
                
               
            }
            

        
        }
        
        
          
           
        
            
        
        
            // #scene03_textbox3_motion
        
            if(left>2700){            
            $(".title3").animate({
                "top":'1%',
                "opacity" : '1'
            })
            

            setTimeout(function(){ $('.title3>img').animate({top:'0%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.subtitle3').animate({top:'34.8%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.text5_1').animate({top:'0%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.text5_bot').animate({bottom:'0%',opacity:'1'},900) }, );
        
            //★   setTimeout은 왜 넣는건지??
        }
        
        
             // #scene04_Main Text(moviezone)
        
            if(left>4500){            
            $(".moviezone").animate({
                "top":'12%',
                "opacity" : '1'
            })
            }
        
            if(left>5200){            
            $(".title4").animate({
                "top":'2%',
                "opacity" : '1'
            })
                
            setTimeout(function(){ $('.title4>img').animate({top:'0%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.subtitle4').animate({top:'33%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.text6').animate({top:'42%',opacity:'1'},900) }, );
            setTimeout(function(){ $('.text7').animate({top:'42%',opacity:'1'},900) }, );
                
            }

        
        
             // #scene05_Main Text(moviezone)
        
            if(left>6600){            
            $(".picniczone").animate({
                "top":'12%',
                "opacity" : '1'
            },900)
            }
    });
        
    });