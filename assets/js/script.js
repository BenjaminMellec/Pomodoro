$( document ).ready(function() {

///// TIMER

	var timeValue = 1500;
	var minutes = Math.floor(timeValue / 60);
	var seconds = Math.floor(timeValue % 60);
	var interval = 0;
	var buttonValue;

	var playPause = $('#js-button-play-pause');
	var play = $('#js-button-play');
	var pause = $('#js-button-pause');

	var reset = $('#js-button-reset');

	var breakWork = $('#js-button-break-work');


	function display(m, s) {
	    if (m < 10) {
	        m = "0" + m;
	    }
	    if (s < 10) {
	        s = "0" + s;
	    }
	    return $('#js-clock-timer-minutes').html(m) + $('#js-clock-timer-seconds').html(s);
	}
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
		display(minutes, seconds);
	}


	playPause.click(function() {
		if (pause.css('display') === 'none') {
			interval = setInterval(countdown, 1000);
		} else {
			clearInterval (interval);
		}
	});
	reset.click(function() {
		minutes = Math.floor(timeValue / 60);
		seconds = Math.floor(timeValue % 60);
		if (pause.is(':visible')) {
			$('#js-button-play, #js-button-pause').toggle();
		}
		if ($('#js-button-break').is(':visible')) {
			timeValue = 1500;
		}
		if ($('#js-button-work').is(':visible')) {
			timeValue = 300;
		}
		display(minutes, seconds);
		clearInterval (interval);
	});
	breakWork.click(function breakWork() {
		if( $('#js-button-break').is(':visible')) {
			timeValue = 300;
			minutes = Math.floor(timeValue / 60);
			seconds = Math.floor(timeValue % 60);
		} else {
			timeValue = 1500;
			minutes = Math.floor(timeValue / 60);
			seconds = Math.floor(timeValue % 60);
		}
		display(minutes, seconds);
	});




///// GRAPHICS
	$('#js-button-play-pause').click(function(){
		$('#js-button-play, #js-button-pause').toggle();
	})
	$('#js-button-break-work').click(function(){
		$('#js-button-break, #js-button-work').toggle();
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