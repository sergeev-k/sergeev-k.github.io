$(document).ready(function() {
	$('.bar').click(function() {
		$('.sub-nav').css('right', '0');
	});
	$('.fa-times').click(function() {
		$('.sub-nav').css('right', '-100%');
	});
	$('.sub-nav a').click(function() {
		$('.sub-nav').css('right', '-100%');
	});
	$('#carousels').slick({
		arrows: true,
		swipe: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	$('#slicks').slick({
		arrows: false,
		swipe: true,
		dots: true,
	});
	(function() { 
  		var instances = plyr.setup({
    // Output to console
    	debug: true
  		});
	// Get an element
	function get(selector) {
	    return document.querySelector(selector);
	}
  	// Custom event handler (just for demo)
  	function on(element, type, callback) {
    	if (!(element instanceof HTMLElement)) {
      	element = get(element);
    }
    element.addEventListener(type, callback, false);
  	}
  	// Loop through each instance
  	instances.forEach(function(instance) {
    // Play
    on('.js-play', 'click', function() { 
      instance.play();
    });   
    // Pause
    on('.js-pause', 'click', function() { 
      instance.pause();
    });   
    // Stop
    on('.js-stop', 'click', function() { 
      instance.stop();
    });  
    // Rewind
    on('.js-rewind', 'click', function() { 
      instance.rewind();
    });  
    // Forward
    on('.js-forward', 'click', function() { 
      instance.forward();
    });
  });
})();
});


