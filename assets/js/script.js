$( document ).ready(function() {

	let minutes = 25;
	let seconds = 0;

	//GESTION DE L'AFFICHAGE
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	$('#js-clock-timer-minutes').html(minutes);
	$('#js-clock-timer-seconds').html(seconds);


	//GESTION DES BOUTONS

	//Play & pause
	$('#js-button-play-pause').click(function(){
		$('#js-button-play, #js-button-pause').toggle();
	})

	//Break & work


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