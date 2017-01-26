$(document).ready(function() {

	
	$(".welcome").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#welcome").offset().top},
        'slow');
	});

	$(".howto").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#howto").offset().top},
        'slow');

	});

	$(".getfearch").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#getfearch").offset().top},
        'slow');
	});

	$(".getinvolved").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#getinvolved").offset().top},
        'slow');
	});
	$(".goto-howto").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#howto").offset().top},
        'slow');
	});
	$(".goto-get").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#getfearch").offset().top},
        'slow');
	});
	$(".goto-involved").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#getinvolved").offset().top},
        'slow');
	});
	$(".goto-comment").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#comment").offset().top},
        'slow');
	});
	$(".goto-welcome").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#welcome").offset().top},
        'slow');
	});


});