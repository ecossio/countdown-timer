(function () {
	const daysEl = document.getElementById('days');
	const hoursEl = document.getElementById('hours');
	const minsEl = document.getElementById('minutes');
	const secondsEl = document.getElementById('seconds');

	document.title = `Año nuevo ${new Date().getFullYear()+1}`;

	function countdown() {
		const now = new Date();
		const end = new Date(now.getFullYear() + 1,0,1);

		const distance = end.getTime() - now.getTime();

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		daysEl.innerHTML = days;
		hoursEl.innerHTML = formatTime(hours);
		minsEl.innerHTML = formatTime(minutes);
		secondsEl.innerHTML = formatTime(seconds);
	}

	function formatTime(time) {
		return time < 10 ? `0${time}`: time;
	}

	setInterval(countdown, 1000);
	countdown();
})();