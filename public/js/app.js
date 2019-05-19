$(document).ready(() => {
	$('.burger-icon').click(() => {
		$('#burger').toggleClass('active');
	});

	$('.burger-icon').click(() => {
		$('.sidebar').toggleClass('active');
	});
});
