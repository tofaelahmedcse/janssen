/*
Spokes - Oak Cliff Pedicabs - 2013
=====================================================================================
  Site created by MonkeyTag - www.monkeytag.com
  Artwork by Gary Pedroza
  Front-end and back-end development by Anthony Bearden 
===================================================================================== 
*/
 
/* ---------------------------------- */

/*
 *  TABLE OF CONTENTS
 *  
 *  @Initialize
 *	@Events
 *	@Instantiate
 *	@Shell
 *	@Scrollable
 *	@Worker
 *	@Scrolling Quotes
 *	@MainNav
 *	@Contact Box / FAQ / Privacy Policy
 *	@Call Outs
 *	@Putt Animation
 *	@Bike Animation
 *	
 */
 
/*----------------------------------------------------
@Initialize
-----------------------------------------------------*/

jQuery(
  
  function ($) {

    $.Body = $('body');
    
    $.Window = $(window);
    
    $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
    
    $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))),
    
    $.Unsupported = $.Body.hasClass('unsupported-browser');
    
    $.Body
    
    $('[data-controller]').Instantiate();

  } 
  
);

/*----------------------------------------------------
@Events
-----------------------------------------------------*/

(function($) {

  $.Events = {
        
     SECTION_ENTER: 'sectionEnter',
     
     SCROLL_TO: 'scrollTo',
     
     SCROLL: 'windowScroll',
     SCROLL_ENTER: 'windowScrollEnter',
     SCROLL_LEAVE: 'windwScrollLeave'

  
  } // Events  
     
})(jQuery);


/*----------------------------------------------------
@Instantiate
-----------------------------------------------------*/

(function($) {

  $.fn.Instantiate = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 

          var $self = $(this),
              $controller = $self.attr('data-controller');
                  
          if ($self[$controller])
            $self[$controller]();
              
      });
      
  }
    
})(jQuery);


/*----------------------------------------------------
@Shell
-----------------------------------------------------*/

(function($) {

  $.fn.SHELL = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 
              
      });
      return this;
  }

})(jQuery); 


/*----------------------------------------------------
@Scrollable
-----------------------------------------------------*/

(function($) {
  $.fn.Scrollable = function(settings) {
   
     var config = { threshold: -100, offset_scroll: 6, offset_intertia: 0 };
     if (settings) $.extend(config, settings);    
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id');
            
        config.threshold = 0
        
        if ($.Mobile || $.Unsupported) {  
          $self.css({backgroundAttachment:'scroll'})
        }else{
        
        $.Window
          .bind('scroll',
            function(e){
            
              if ( $.inview($self,{threshold:config.threshold}) ) {               
                if (!$self.hasClass('_active')){               
                  $self.addClass('_active');                 
                  }
                  
                _scroll_background();                 
                $self.triggerHandler($.Events.SCROLL,$.distancefromfold($self,{threshold:config.threshold}) - config.threshold)
                
              }else{
                
                if ($self.hasClass('_active')){                
                  $self.removeClass('_active');                  
                  $self.triggerHandler($.Events.SCROLL_LEAVE);                  
                }             
              }
            })         
        }
        
        function _scroll_background() {
          var _x = '50% '                  
          var bpos = _x + (-($.distancefromfold($self,{threshold:config.threshold}) - config.threshold) * config.offset_intertia) + 'px';         
          $self.css({'backgroundPosition':bpos})
        }            
     });
     
    return this;
     
  } //Scenes
  
  
  $.fn.SceneHome = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),	
	            //$mainbg = $self.find('.mainbg'), // background   
	            $bg1 = $self.find('.bg1'), // light poles
	            $bg2 = $self.find('.bg2'), // pedicab-left
	            $bg3 = $self.find('.bg3'), // pedicab-right     
	            $bg4 = $self.find('.bg4'), // pedicab-left-lights
	            $bg5 = $self.find('.bg5'), // pedicab-right-lights
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        	        	          
	        function on_scroll(e,distance) {
	        	//var mainpos = '50% ' + (-5+$.Window.height()/2-distance*.15) + 'px'; // background
	        	var bpos1 = '50% ' + (-405+$.Window.height()/2-distance*.15) + 'px'; // light poles
	        	var bpos2 = (-106+distance/12) + '% ' + (1330+$.Window.height()/2-distance*1) + 'px'; // pedicab-left
	        	var bpos4 = (-106+distance/12) + '% ' + (1330+$.Window.height()/2-distance*1) + 'px'; // pedicab-left-lights
		      	var bpos3 = (200-distance/10) + '% ' + (200+$.Window.height()/2-distance*.15) + 'px'; // pedicab-right		      	
		      	var bpos5 = (200-distance/10) + '% ' + (200+$.Window.height()/2-distance*.15) + 'px'; // pedicab-right-lights	          		          
	          	
	          	// turn light on    
	          	if (distance > 200) { $bg4.fadeIn('fast'); } else { $bg4.fadeOut('fast'); }
	          	if (distance > 200) { $bg5.fadeIn('fast'); } else { $bg5.fadeOut('fast'); }
	          	
	          	// lights flashing on and off
	            if ((distance > 1100) && (distance < 1175)) { $bg4.fadeIn('fast');$bg4.fadeOut('fast'); }
	            if ((distance > 1200) && (distance < 1255)) { $bg4.fadeIn('fast');$bg4.fadeOut('fast'); }
	            if ((distance > 900) && (distance < 975)) { $bg5.fadeIn('fast');$bg5.fadeOut('fast'); }
	            	 	          	
	          	//$mainbg.css({'backgroundPosition':mainpos});
	        	$bg1.css({'backgroundPosition':bpos1});
	          	$bg2.css({'backgroundPosition':bpos2});
	          	$bg3.css({'backgroundPosition':bpos3});
	          	$bg4.css({'backgroundPosition':bpos4});
	          	$bg5.css({'backgroundPosition':bpos5});	 
	        }	        
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}  
	              
	     });	     
	    return this;	     
	  } //Home 


  
  $.fn.ScenePedi = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),
	            $mainbg = $self.find('.mainbg'), // background
	            $bg1 = $self.find('.bg1'), // sun
	            $bg2 = $self.find('.bg2'), // cloud1
	            $bg3 = $self.find('.bg3'), // cloud2
	            $bg4 = $self.find('.bg4'), // cloud3
	            $bg5 = $self.find('.bg5'), // cloud4
	            $bg6 = $self.find('.bg6'), // bird
	            $bg7 = $self.find('.bg7'), // hero
	            $bg8 = $self.find('.bg8'), // hero shadow
	            $bg9 = $self.find('.bg9'), // pedicab
	            $bg10 = $self.find('.bg10'), // pedicab light
	            $desc = $self.find('.desc'), // description box
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        
	        function on_scroll(e,distance) {
	          
	          var mainpos = '50% ' + (-420+$.Window.height()/2-distance*.15) + 'px'; // background
		      var bpos1 = '50% ' + (-490+$.Window.height()/2+distance/3) + 'px'; // sun
		      var bpos2 = '50% ' + (15+$.Window.height()/2-distance*.15) + 'px'; // cloud1
	          var bpos3 = '50% ' + (-150+$.Window.height()/2-distance*.1) + 'px'; // cloud2
	          var bpos4 = '50% ' + (-160+$.Window.height()/2-distance*.125) + 'px'; // cloud3
	          var bpos5 = '50% ' + (-120+$.Window.height()/2-distance*.1) + 'px'; // cloud4
	          var bpos6 = '50% ' + (-220+$.Window.height()/2+distance/4) + 'px'; // bird
	          var bpos7 = (-20+distance/20) + '% ' + (-45+$.Window.height()/2-distance/8) + 'px';  // hero
	          var bpos8 = (-24+distance/20) + '% ' + (415+$.Window.height()/2-distance/8) + 'px'; // hero shadow
	          var bpos9 = '50% ' + (255+$.Window.height()/2-distance*.1) + 'px'; // pedicab
	          var bpos10 = '50% ' + (255+$.Window.height()/2-distance*.1) + 'px'; // pedicab light
	         
          
	          // snap items into place and scroll upwards with the base
	          if (distance > 1050) {
	          	 var bpos1 = '50% ' + (15+$.Window.height()/2-distance*.15) + 'px'; // sun         	        	
	          }
	          
	           if (distance > 1170) {
	          	 var bpos6 = '50% ' + (255+$.Window.height()/2-distance*.15) + 'px'; // bird          	        	
	          }
	          
	          //text fades in
	          if (distance > 80) { $desc.fadeIn('500'); } else { $desc.fadeOut('200'); }

	          // turn light on    
	          if (distance > 1600) { $bg10.fadeIn('fast'); } else { $bg10.fadeOut('fast'); }
	          
    	          
	          $mainbg.css({'backgroundPosition':mainpos});
	          $bg1.css({'backgroundPosition':bpos1});
	          $bg2.css({'backgroundPosition':bpos2});
	          $bg3.css({'backgroundPosition':bpos3});
	          $bg4.css({'backgroundPosition':bpos4});
	          $bg5.css({'backgroundPosition':bpos5});
	          $bg6.css({'backgroundPosition':bpos6});
	          $bg7.css({'backgroundPosition':bpos7});
	          $bg8.css({'backgroundPosition':bpos8});
	          $bg9.css({'backgroundPosition':bpos9});
	          $bg10.css({'backgroundPosition':bpos10});
	        }
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}	
     
	     });
	     
	    return this;
	     
	  } //Pedicabs? 
	  
	  
  $.fn.SceneSpokes = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),
	            $mainbg = $self.find('.mainbg'), // background
	            $bg1 = $self.find('.bg1'), // justin
	            $bg2 = $self.find('.bg2'), // ripples-back
	            $bg3 = $self.find('.bg3'), // ripples-front
	            $bg4 = $self.find('.bg4'), // pedicabs
	            $bg5 = $self.find('.bg5'), // pedicabs
	            $bg6 = $self.find('.bg6'), // cloud1
	            $bg7 = $self.find('.bg7'), // cloud2
	            $bg8 = $self.find('.bg8'), // cloud3
	            $bg9 = $self.find('.bg9'), // bridge
	            $bg10 = $self.find('.bg10'), // sun
	            $bg11 = $self.find('.bg11'), // sun reflect
	            $bg12 = $self.find('.bg12'), // bridge two
	            $desc = $self.find('.desc'), // description box
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        
	        function on_scroll(e,distance) {
	          
	          var mainpos = '50% ' + (-400+$.Window.height()/2-distance*.15) + 'px'; // background
	          var bpos1 = (190-distance/15) + '% ' + (360+$.Window.height()/2-distance*.25) + 'px'; // justin
	          var bpos2 = (175-distance/21) + '% ' + (640+$.Window.height()/2-distance*.25) + 'px'; // ripples-back
	          var bpos3 = (180-distance/18) + '% ' + (720+$.Window.height()/2-distance*.25) + 'px'; // ripples-front
	          var bpos4 = (-20+distance/25) + '% ' + (220+$.Window.height()/2-distance*.15) + 'px'; // pedicabs
	          var bpos5 = (-60+distance/20) + '% ' + (220+$.Window.height()/2-distance*.15) + 'px'; // pedicabs
	          var bpos6 = (-10+distance/40) + '% ' + (-110+$.Window.height()/2-distance*.155) + 'px'; // cloud1
	          var bpos7 = (-5+distance/45) + '% ' + (-120+$.Window.height()/2-distance*.135) + 'px'; // cloud2
	          var bpos8 = (-15+distance/35) + '% ' + (-60+$.Window.height()/2-distance*.175) + 'px'; // cloud3
	          var bpos9 = '50% ' + (-400+$.Window.height()/2-distance*.15) + 'px'; // bridge
	          var bpos10 = '50% ' + (-490+$.Window.height()/2+distance/3) + 'px'; // sun
	          var bpos11 = '50% ' + (222+$.Window.height()/2-distance*.15) + 'px'; // sun reflect
	          var bpos12 = '50% ' + (-400+$.Window.height()/2-distance*.15) + 'px'; // bridge two
	          
	          
	          // snap items into place and scroll upwards with the base
	          if (distance > 1220) {
	          	 var bpos10 = '50% ' + (105+$.Window.height()/2-distance*.15) + 'px'; // sun          	        	
	          }
	          
	          // turn light on    
	          if (distance > 1000) { $bg11.fadeIn('5000'); } else { $bg11.fadeOut('1000'); }
	          
	          //text fades in
	          if (distance > 1500) { $desc.fadeIn('500'); } else { $desc.fadeOut('200'); }
	          	          
	          $mainbg.css({'backgroundPosition':mainpos});
	          $bg1.css({'backgroundPosition':bpos1});
	          $bg2.css({'backgroundPosition':bpos2});
	          $bg3.css({'backgroundPosition':bpos3});
	          $bg4.css({'backgroundPosition':bpos4});
	          $bg5.css({'backgroundPosition':bpos5});
	          $bg6.css({'backgroundPosition':bpos6});
	          $bg7.css({'backgroundPosition':bpos7});
	          $bg8.css({'backgroundPosition':bpos8});
	          $bg9.css({'backgroundPosition':bpos9});
	          $bg10.css({'backgroundPosition':bpos10});
	          $bg11.css({'backgroundPosition':bpos11});
	          $bg12.css({'backgroundPosition':bpos12});
	        }
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}	            
	     });
	     
	    return this;
	     
	  } //Spokes?
	  
  $.fn.SceneOC = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),
	            //$mainbg = $self.find('.mainbg'), // background	  	
	            //$callout = $self.find('.callout'), //   
	            $gball = $self.find('.bg4'), 	                  
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        
	        function on_scroll(e,distance) {
	       
	        }
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}	            
	     });
	     
	    return this;
	     
	  } //OakCliff
	  
  $.fn.SceneRoutes = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),
           
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        
	        function on_scroll(e,distance) {
;
	               
	        }
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}	            
	     });
	     
	    return this;
	     
	  } //Routes?
	  
  $.fn.SceneScorch = function() {	   
	  this.each(function() { 	      
	        var $self = $(this),
	            $mainbg = $self.find('.mainbg'), 
	            $titles = $self.find('.titles'),    
	            _threshold = -200;
	        
	        $self
	          .Scrollable({threshold: _threshold})
	          .bind($.Events.SCROLL,on_scroll)
	          .bind($.Events.SCROLL_ENTER,on_scroll_enter)
	          .bind($.Events.SCROLL_LEAVE,on_scroll_leave);
	        
	        function on_scroll(e,distance) {
	          
	          var mainpos = '50% ' + (-240+$.Window.height()/2-distance*.5) + 'px'; // background

	          $mainbg.css({'backgroundPosition':mainpos});
	               
	        }
	        
	        function on_scroll_enter(e) {}	        
	        function on_scroll_leave(e) {}	            
	     });
	     
	    return this;
	     
	  } //Scorchers?
	  

 
})(jQuery);


/*----------------------------------------------------
@Worker
-----------------------------------------------------*/

(function($) {
    $.distancefromfold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return (fold + settings.threshold) - $element.offset().top ;
    };
    
    $.belowthefold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $element.offset().top - settings.threshold;
    };
    
    $.rightoffold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $element.offset().left - settings.threshold;
    };
        
    $.abovethetop = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $element.offset().top + settings.threshold  + $element.height();
    };
    
    $.leftofbegin = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $element.offset().left + settings.threshold + $element.width();
    };
    
    $.inview = function($element, settings) {
        return ($.abovethetop($element,settings)!=true && $.belowthefold($element,settings)!=true)
    };


    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    });
    
})(jQuery);   


/*----------------------------------------------------
@Scrolling Quotes
-----------------------------------------------------*/
$(document).ready(function() {
    $('.quotes li').each(function(index) {
        $(this).hide();
    });
    $('.quotes li').first().addClass('active').fadeTo("slow", 1);
    setInterval(function() {
        quotes()
    }, 4500);
    function quotes() {
        var mval = $('.quotes li').last().attr('class');
        console.log(mval);
        if (mval) {
            $('.quotes li').first().addClass('active').fadeTo("slow", 1);
            $('.quotes li').last().removeClass('active').hide();
            $('.active').fadeTo("slow", 1);
        } else {
            $('.active').removeClass('active').hide().next().addClass('active');
            $('.active').fadeTo("slow", 1);
        }
    };


/*----------------------------------------------------
@MainNav
-----------------------------------------------------*/

$("header").localScroll({target:'body', offset:{top:-110, left:0}});
$("#contactbox").localScroll({target:'body', offset:{top:-230, left:0}});

/*----------------------------------------------------
@ContactBox / FAQ / Privacy Policy
-----------------------------------------------------*/

$('html, #navlink, #scene4 .bg1, #scene4 .bg5').click(function() {
  	$('#contactbox, #faqbox, #privacyoverlay, #privacybox, #scene4 .content').fadeOut("slow", "linear"); 
});

$('#wrap, #wrap2, #wrap3, #wrap4, #wrap5, #wrap6').click(function(event){
     event.stopPropagation();
});


$('#toggle').click(function(event){
    $('#contactbox').fadeToggle("slow", "linear");
    $('#faqbox').fadeOut("slow", "linear");
});

$('.toggle2').click(function(event){
	$('#contactbox').fadeOut("slow", "linear");
    $('#faqbox').fadeToggle("slow", "linear");          
});

$('.toggle3').click(function(event){
    $('#privacyoverlay, #privacybox').fadeToggle("slow", "linear");
});

$('#toggle4').click(function(event){
    $('#faqbox').fadeToggle("slow", "linear");    
    $('#contactbox').fadeOut("slow", "linear");      
});

/*----------------------------------------------------
@CallOuts
-----------------------------------------------------*/
$('#scene4 .hotspot-container.1').click(function(event){
    $('#scene4 .content.kessler').fadeToggle(500, "linear");
    $('#scene4 .content.oddfellows, #scene4 .content.mural, #scene4 .content.texas, #scene4 .content.enos').fadeOut("slow", "linear");
});

$('#scene4 .hotspot-container.2').click(function(event){
    $('#scene4 .content.oddfellows').fadeToggle(500, "linear");
    $('#scene4 .content.kessler, #scene4 .content.mural, #scene4 .content.texas, #scene4 .content.enos').fadeOut("slow", "linear");
});

$('#scene4 .hotspot-container.3').click(function(event){
    $('#scene4 .content.mural').fadeToggle(500, "linear");
    $('#scene4 .content.kessler, #scene4 .content.oddfellows, #scene4 .content.texas, #scene4 .content.enos').fadeOut("slow", "linear");
});

$('#scene4 .hotspot-container.4').click(function(event){
    $('#scene4 .content.enos').fadeToggle(500, "linear");
    $('#scene4 .content.kessler, #scene4 .content.oddfellows, #scene4 .content.mural, #scene4 .content.texas').fadeOut("slow", "linear");
});

$('#scene4 .hotspot-container.5').click(function(event){
    $('#scene4 .content.texas').fadeToggle(500, "linear");
    $('#scene4 .content.kessler, #scene4 .content.oddfellows, #scene4 .content.mural, #scene4 .content.enos').fadeOut("slow", "linear");
});

/*----------------------------------------------------
@PuttAnimation
-----------------------------------------------------*/

$(".btn1").mouseenter(function(){
    $('#scene4 .bg4').stop().animate({"top": "2092px"}, 2000,
    function() {
      $('#scene4 .bg4').css({ 'top': "" });     
  });
});

/*----------------------------------------------------
@BikeAnimation
-----------------------------------------------------*/
  
$('#scene4').mouseenter(function(){
    $('#scene4 .bg5').animate({"top": "300px"}, 7000)    
});
});


