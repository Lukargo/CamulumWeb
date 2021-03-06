$(window).load(function() {
	
	// Flex Slider
    $('.flexslider1').flexslider({
      animation: 'slide', // Change Animation Type to fade
      animationLoop: true,
      touch: true,
      directionNav: false,
      slideshowSpeed: 5000, // Slide Intervals
      animationSpeed: 600, // Animation Speeds/times
      slideshow: true,
      pauseOnAction: false,
      controlsContainer: '.flex-container'
    });
 	
 	// Flex Slider Quote
    $('.flexslider2').flexslider({
      animation: 'fade', // Change Animation Type to slide
      smoothHeight: false,
      animationLoop: true,
      touch: true,
      directionNav: false,
      slideshowSpeed: 7000, // Slide Intervals
      animationSpeed: 300, // Animation Speeds/times
      slideshow: true,
      pauseOnAction: false, 
      controlsContainer: '.flex-container'
    });
    
    
    // Back Stretch 
    $("#masthead").backstretch("img/bg_3.jpg");
    	 
  });
  
  
  