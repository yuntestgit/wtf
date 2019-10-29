(function() {
	function $$(_selector) {
		return document.querySelector ? document.querySelector(_selector) : null;
	}
	function $$$(_selector) {
		return document.querySelectorAll ? document.querySelectorAll(_selector) : [];
	}

	var trapezoidSwitch = $$$('.trapezoidSwitch');
	for (var i = 0; i < trapezoidSwitch.length; i++) {
		trapezoidSwitch[i].addEventListener(
			'click',
			function() {
				this.classList.toggle('on');
			}.bind(trapezoidSwitch[i])
		);
	}
})();
