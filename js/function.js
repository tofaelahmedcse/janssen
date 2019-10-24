(function($) {
  $(function() {
    // Begin input common focus and blur for value.
    $(
      'input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea'
    )
      .focus(function() {
        if (this.value == this.defaultValue) {
          this.value = "";
        }
      })
      .blur(function() {
        if (!this.value) {
          this.value = this.defaultValue;
        }
      });

    // Ends input common focus and blur for value.
    var controller = $.superscrollorama();

    // amount of scrolling over which the tween takes place (in pixels)
    var scrollDuration = 200;

    // content box fade animation
    controller.addTween(
      "#fade-it",
      TweenMax.from($("#fade-it"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
    controller.addTween(
      "#fadeit",
      TweenMax.from($("#fadeit"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
    controller.addTween(
      "#fade",
      TweenMax.from($("#fade"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
    controller.addTween(
      "#fadein",
      TweenMax.from($("#fadein"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
    controller.addTween(
      "#fade-in",
      TweenMax.from($("#fade-in"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
    controller.addTween(
      "#fade-in-piechart",
      TweenMax.from($("#fade-in-piechart"), 0.5, { css: { opacity: 0 } }),
      scrollDuration
    );
      
      
    // footer up article item
    controller.addTween(
      "#article1",
      TweenMax.from($("#article1"), 0.5, { css: { opacity: 0 } }),
      200
    );
    controller.addTween(
      "#article2",
      TweenMax.from($("#article2"), 0.7, { css: { opacity: 0 } }),
      300
    );
    controller.addTween(
      "#article3",
      TweenMax.from($("#article3"), 0.9, { css: { opacity: 0 } }),
      400
    );

     
    // parallax-clock
	controller.addTween(
	  '#parallax-clock',
	  (new TimelineLite())
	    .append([
	      TweenMax.fromTo($('#parallax-it-desk'), 1, 
	        {css:{top: 100}, immediateRender:true}, 
	        {css:{top:-200}}),
            TweenMax.fromTo($('#parallax-it-computer'), 1, 
	        {css:{top: 150}, immediateRender:true}, 
	        {css:{top: -230}})
	    ]),
	  1000 // scroll duration of tween
	);

      
      // parallax example
	controller.addTween(
	  '#examples-parallax',
	  (new TimelineLite())
	    .append([
	      TweenMax.fromTo($('#parallax-it-left'), 1, 
	        {css:{top: 0}, immediateRender:true}, 
	        {css:{top:-200}})
	    ]),
	  1000 // scroll duration of tween
	);
      
    // parallax example
	controller.addTween(
	  '#examples-parallax1',
	  (new TimelineLite())
	    .append([
	      TweenMax.fromTo($('#parallax-it-left1'), 1, 
	        {css:{top: 50}, immediateRender:true}, 
	        {css:{top:-60}}),
            TweenMax.fromTo($('#parallax-it-right'), 1, 
	        {css:{top: 50}, immediateRender:true}, 
	        {css:{top: -60}})
	    ]),
	  1000 // scroll duration of tween
	);
      
       // piechart example
	controller.addTween(
	  '#piechart-parallax',
	  (new TimelineLite())
	    .append([
	      TweenMax.fromTo($('#parallax-it-piechart'), 1, 
	        {css:{top: 50}, immediateRender:true}, 
	        {css:{top:-60}})
	    ]),
	  1000 // scroll duration of tween
	);
       // piechart example
	controller.addTween(
	  '#3stage-parallax',
	  (new TimelineLite())
	    .append([
	      TweenMax.fromTo($('#parallax-it-3stage'), 1, 
	        {css:{top: 50}, immediateRender:true}, 
	        {css:{top:-60}})
	    ]),
	  1000 // scroll duration of tween
	);
      
      

    //wheel chair thum move

    controller.pin($("#examples-2"), 3000, {
      anim: new TimelineLite()
        .append(
          TweenMax.fromTo(
            $("#move-it"),
            0.5,
            { css: { left: 0, top: 300 }, immediateRender: true },
            { css: { top: 0 } }
          )
        )
        .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 500 } }))
        .append(TweenMax.to($("#move-it"), 0.5, { css: { top: -200 } }))
        .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 0 } }))
    });
      
      //wheel chair thum move media
      
      if($(window).width() <= 1024 ){
          controller.pin($("#examples-2"), 3000, {
          anim: new TimelineLite()
            .append(
              TweenMax.fromTo(
                $("#move-it"),
                0.5,
                { css: { left: 0, top: 300 }, immediateRender: true },
                { css: { top: 0 } }
              )
            )
            .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 700 } }))
            .append(TweenMax.to($("#move-it"), 0.5, { css: { top: -200 } }))
            .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 0 } }))
        });
      }

    //dog and man move

    controller.pin($("#examples-3"), 3000, {
      anim: new TimelineLite()
        .append(
          TweenMax.fromTo(
            $("#move-it1"),
            0.5,
            { css: { left: 0, top: 300 }, immediateRender: true },
            { css: { top: 0 } }
          )
        )
        .append(TweenMax.to($("#move-it1"), 0.5, { css: { right: 0 } }))
        .append(TweenMax.to($("#move-it1"), 0.5, { css: { top: 100 } }))
        .append(TweenMax.to($("#move-it1"), 0.5, { css: { left: -500 } }))
    });
      
       //dog and man move media
      
      if($(window).width() <= 1366 ){
          controller.pin($("#examples-3"), 3000, {
          anim: new TimelineLite()
            .append(
              TweenMax.fromTo(
                $("#move-it1"),
                0.5,
                { css: { left: 0, top: 300 }, immediateRender: true },
                { css: { top: 0 } }
              )
            )
            .append(TweenMax.to($("#move-it1"), 0.5, { css: { right: 0 } }))
            .append(TweenMax.to($("#move-it1"), 0.5, { css: { top: 100 } }))
            .append(TweenMax.to($("#move-it1"), 0.5, { css: { left: -300 } }))
        });
      }

    

    // This function for scroll animation
    var $animation_elements = $(
      ".animate-from-bottom, .animate-from-left, .animate-from-right,.common-wrap" //.animate-from-right
    );
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        //check to see if this current container is within viewport
        if (element_top_position <= window_bottom_position) {
          $element.addClass("in-view");
        } else {
          $element.removeClass("in-view");
        }
      });
    }

    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    // End animation function
      
  }); // End ready function.
    
    $(document).ready(function() {
            $('.popup-youtube, .popup-vimeo,.gallery-item').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: true
            });

            function scrollkk(elem,propertiesAreToBeAnimated){
                var $titleDiv = $(elem);

                //Slow scroll of social div and fade it out
                $titleDiv.css(propertiesAreToBeAnimated);
            }

             $(window).scroll(function() {
                if($(window).width() > 991 ){
                    multipleAnimation()
                } // End if function
            });
        
            
            function multipleAnimation(){
                    
                    //Get scroll position of window
                        var windowScroll = $(this).scrollTop();
                        var propertiesAreToBeAnimated1 = {
                                'margin-top' : - (windowScroll / 3) + "px",
                                'opacity' : 1 - (windowScroll / 230)
                        }

                        var fortopy = - (windowScroll * 0.7) + "px";
                        var forscaleright = 1 - (windowScroll / 230);

                        var propertiesAreToBeAnimated2 = {
                            'transform' : "translateY("+fortopy+")",
                            'opacity' : forscaleright
                        }

                        var forbottomy = - (windowScroll * 0.7) + "px";
                        var forscalebottom = 1 - (windowScroll / 230);


                        var propertiesAreToBeAnimated3 = {
                            'transform' : "translateY("+forbottomy+")",
                            'opacity' : forscalebottom
                        }

                            scrollkk('.hero-content h1', propertiesAreToBeAnimated1);
                            //scrollkk('.parathumb', propertiesAreToBeAnimated2);
                            //scrollkk('.bottom-left',propertiesAreToBeAnimated3);
                }

                //cloud anima

                (function cloudAnimation(){
                        var animateCloud = function (){
                            $(".cloud-wrap").addClass("move");
                        };
                        animateCloud();
                        var animinterval = setInterval(function(){
                            $cloudwrap1 = $(".cloud-wrap");
                            $cloudCon = $(".cloudCon");
                            cloudwraphtml = $cloudCon.html();
                            $cloudCon.empty();
                            $cloudCon.html(cloudwraphtml);
                            $cloudCon.find(".cloud-wrap").removeClass("move");
                            $cloudCon.find(".cloud-wrap").css({
                                "transform" : "translateX(100%)"
                            });
                            var ss = setTimeout(function(){
                                $cloudCon.find(".cloud-wrap").addClass("move");
                            },100);
                        },20000);
                })();

                var inview = function(elem){
                    var elemTop = $(elem).offset().top;
                    var elemBottom = elemTop + $(elem).outerHeight();
                    var vpTop = $(window).scrollTop();
                    var vpBottom = vpTop + $(window).height();
                    return elemBottom > vpTop && elemTop < vpBottom;
                };
            
            // For random background


				/*	setInterval(backgroundRotation, 1600 );
					function backgroundRotation(){
						$('.first').fadeOut(800)
						$('.second').fadeIn( 800, function(){
								$('.first').fadeIn(800)
								$('.second').fadeOut(800)
						})

					}*/


					// For 3 status of man images
					setInterval(imageRotation, 4500 );
					function imageRotation(){

						$('.man-1').fadeIn( 1500, function(){
							$('.man-2').fadeIn( 1500 )
							$('.man-1').fadeOut( 1500, function(){
								 $('.man-3').fadeIn( 1500 )
									$('.man-2').fadeOut( 1500 , function(){
											 $('.man-1').fadeIn( 1500 )
											 $('.man-3').fadeOut(1500)
									})
							})
						})
			    }
				
            
              (function strongimganim(){
                    $(window).on("scroll",function() {
                        var fade = function(index) {
                                var stngitem = $('.animateThis');
                                stngitem.eq(index).animate({
                                        opacity: 1
                                },1000, function() {
                                        if (index < stngitem.length) {
                                                fade(index + 1);
                                        }
                                })
                        }

                        if(inview(".animateThis")){
                            var ss = setTimeout(function(){
                                fade(0);
                            },1000);
                            // $(window).off("scroll");
                        }
                    });
                })();

                (function videogalleryanim(){
                    $(window).on("scroll",function() {
                        var fade = function(index) {
                                var glitem = $('.gallery-item');
                                glitem.eq(index).animate({
                                        opacity: 1
                                },1000, function() {
                                        if (index < glitem.length) {
                                                fade(index + 1);
                                        }
                                })
                        }

                        if(inview(".gallery-wrap")){
                            var ss = setTimeout(function(){
                                fade(0);
                            },1000);
                            // $(window).off("scroll");
                        }
                    });
                })();
        

    
    
               $('.marker-animation').markerAnimation({

              // background color
              "color": '#FFFF00',

              // position
              'padding_bottom': '.3em',

              // thickness
              "thickness": '5em',


              // enabled stripes
              'stripe': false,
              'stripe_thickness': 2,

              // delay
              "delay": '3s',

              // duration
              "duration": '3000ms',

              // easing function
              "function": 'ease',

              // whether to repeat the animation
              "repeat": false,

              cssFilter: function( css ) {
                return css;
              },

            });


                $('.marker-animation-one').markerAnimation({

              // background color
              "color": '#FFFF00',

              // position
              'padding_bottom': '.3em',

              // thickness
              "thickness": '5em',

              // enabled stripes
              'stripe': false,
              'stripe_thickness': 2,

              // delay
              "delay": '6s',

              // duration
              "duration": '3000ms',

              // easing function
              "function": 'ease',

              // whether to repeat the animation
              "repeat": false,

              cssFilter: function( css ) {
                return css;
              }

            });
    

 });

})(jQuery);
