$(function() {

	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('nav ul').slideToggle (300, function(){
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	////////////sliders /////////////
	$('.js-hello-slider').slick({
		autoplay: true,
  		infinite: true,
  		arrows: false
	});

	$('.js-about-slider').slick({
		autoplay: true,
		dots: true,
		customPaging: function(slider, i) {
        return '<i class="icon-circle"></i>';
    		},
		dotsClass: 'slick-dots dots-list',
  		infinite: true,
  		arrows: false
	});

});
