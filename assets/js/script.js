$( document ).ready(function() {

	let minutes = 25;
	let seconds = 0;

	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	$('#js-clock-timer-minutes').html(minutes);
	$('#js-clock-timer-seconds').html(seconds);


});