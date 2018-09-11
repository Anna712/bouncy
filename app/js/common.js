
$(function() {
	$('#preloader-wrapper').addClass('hidden');
	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('nav ul').slideToggle (300, function(){
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});


	$('.projects-item').mouseenter(function() {
		$(this).removeClass('overlay overlay--darker')
	});
	$('.projects-item').mouseleave(function() {
		$(this).addClass('overlay overlay--darker')
	});

	$('.services-icons').on('click', 'li', function() {
		if (!$(this).hasClass('active')) {
			var i = $(this).index();
			$('.services-icons li.active').removeClass('active');
			$('.services-tabs__item.active').hide().removeClass('active');
			$(this).addClass('active');
			$($('.services-tabs').children('.services-tabs__item')[i]).fadeIn(800).addClass('active');

		}
	});	


	// E-mail Ajax Send
	$("#contact-form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.contact-form__success').addClass('active').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.contact-form__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$("#subscribe-form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.subscribe__success').addClass('active').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.subscribe-form__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('#progressbar1').circleProgress({
		startAngle: -1.55,
		value: .8,
		fill: {color: '#0cae8e'},
		size: 90,
		reverse: true,
		emptyFill: '#81868e',
		thickness: '5'
	});

	$('#progressbar2').circleProgress({
		startAngle: -1.55,
		value: .75,
		fill: {color: '#0cae8e'},
		size: 90,
		reverse: true,
		emptyFill: '#81868e',
		thickness: '5'
	});

	$('#progressbar3').circleProgress({
		startAngle: -1.55,
		value: .65,
		fill: {color: '#0cae8e'},
		size: 90,
		reverse: true,
		emptyFill: '#81868e',
		thickness: '5'
	});

	$('.services-bottom__right').on('circle-animation-progress', '.circle', function(event, progress) {
		$(this).find('strong').html(Math.round($(this).data('percent') * progress) + '<span>%</span>');
		});

	/////////GALLERY START////////////////

	$('.portfolio-categories__item a').click(function() {
		$('.portfolio-categories__item').removeClass('selected');
		$(this).parent('li').addClass('selected');
	
	thisItem = $(this).data('category');
	if(thisItem != 'all') {
		$('.gallery-item[data-category='+thisItem+']').slideDown(1000);
		$('.gallery-item[data-category!='+thisItem+']').slideUp(1000);
	} else {
		$('.gallery-item').slideDown(1000);
	}
		return false;
	});
/////////GALLERY end////////////////


	$('.progress-bar>span').each(function() {
		var $elem= $(this);
		$elem.animate({
			get width() {return $elem.data('skill') + '%'}
		}, 2000)
	    });

	$('#map .icon-circle').click(function(event) {
		event.preventDefault();
		$('#map').removeClass('overlay overlay--darkerBg')
	});
	//////top button////////
	
	$('body').append('<a href="#" id="go-top" title="Top">⇧</a>');

	$(function() {
	 $.fn.scrollToTop = function() {
	  $(this).hide().removeAttr("href");
	  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	  var scrollDiv = $(this);
	  $(window).scroll(function() {
	   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	   else $(scrollDiv).fadeIn("slow")
	  });
	  $(this).click(function() {
	   $("html, body").animate({scrollTop: 0}, "slow")
	  })
	 }
	});

	$(function() {
	 $("#go-top").scrollToTop();
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

	$('.js-team-slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots slick-dots--accent',
		speed: 1000
	});

	$('.js-testimonials-slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots slick-dots--accent',
		speed: 1000
	});

	$('.js-blog-slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots slick-dots--light',
		speed: 1000
	});

});

document.addEventListener("DOMContentLoaded", function () {
	new WOW({offset: 100}).init()
});