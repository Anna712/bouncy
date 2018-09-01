$(function() {

	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('nav ul').slideToggle (300, function(){
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
	
});
