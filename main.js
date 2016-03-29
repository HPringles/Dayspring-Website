// strict just to keep concept of bootstrap
+function ($) {
  'use strict';


// spy and scroll menu boogey
$(" a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault()

   // store hash
   var hash = this.hash

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top 
     }, 1000, function(){
       window.location.hash = hash 
     })

})

$(window).scroll(function(){
	if ($(window).scrollTop() > 400){
		$("a.back-to-top").fadeIn("fast");
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

}(jQuery);



