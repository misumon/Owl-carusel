$(document).ready(function(){
  $('.main-slider').owlCarousel({
	  items:1,
	  loop:true,
	  autoplay:true,
	  slideSpeed: 50,
	  animateIn: 'fadeIn',
      animateOut: 'fadeOut'
  });
  
  $('.slider').owlCarousel({
	  items:1,
	  autoplay:true,
	  loop: true,
	  smartSpeed: 900,
      /* autoplayTimeout:1000, */
	  animateIn: 'fadeIn',
      animateOut: 'fadeOut'
  });
  
    var dot = $('.sld .owl-dot');
dot.each(function() {
	var index = $(this).index() + 1;
  if(index < 10){
  	$(this).html('').append(index);
  }else{
     $(this).html(index);
  }
});

  /*
   $(".slider_area").on("translate.owl.carousel",function(){
		$(".sliders img").removeClass("animated fadeInLeft").css("opacity","0");
		
		
	});
	$(".slider_area").on("translated.owl.carousel",function(){
		$(".sliders img").addClass("animated fadeInLeft").css("opacity","1");
		
		
	});
  
  var dot = $('.main-slider .owl-dot');
dot.each(function() {
	var index = $(this).index() + 1;
  if(index < 10){
 	$(this).html('').append(index);
  }else{
     $(this).html(index);
  }
});
*/
});