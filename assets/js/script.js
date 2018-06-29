$( document ).ready(function() {

////TIMER

	var timeValue = 1500;
	var minutes = Math.floor(timeValue / 60);
	var seconds = Math.floor(timeValue % 60);
	var interval = 0;
	var buttonValue;

	var playPause = $('#js-button-play-pause');
	var play = $('#js-button-play');
	var pause = $('#js-button-pause');


	playPause.click(function() {
		if (pause.css('display') === 'none') {
			interval = setInterval(countdown, 1000);
		} else {
			clearInterval (interval);
		}
	})

// display(minutes, seconds);
	function countdown() {

		if (seconds <= 0) {
			seconds = 59;
			minutes --;
			timeValue--;
		} else {
			seconds--;
			timeValue--;
		}

		console.log(minutes, seconds, timeValue);

		$('#js-clock-timer-minutes').html(minutes);
		$('#js-clock-timer-seconds').html(seconds);
	}

	// function display(m, s) {
	//     if (m < 10) {
	//         m = "0" + m;
	//     }
	//     if (s < 10) {
	//         s = "0" + s;
	//     }
	// }









////GRAPHICS

	$('#js-button-play-pause').click(function(){
		$('#js-button-play, #js-button-pause').toggle();
	})


	//GESTION DES THEMES
	$('#js-switcher').click(function(){
		if ($('#js-theme').html() == "Dark") {
			$('#js-theme').html("Light");
			$('body').addClass('body--dark');
			$('#js-clock-circle').addClass('clock-circle--dark');
		} else {
			$('#js-theme').html("Dark");
			$('body').removeClass('body--dark');
			$('#js-clock-circle').removeClass('clock-circle--dark');
		}
	})
});