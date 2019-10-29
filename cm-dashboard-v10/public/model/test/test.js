(function() {
	function $$(_selector) {
		return document.querySelector ? document.querySelector(_selector) : null;
	}

	function $$$(_selector) {
		return document.querySelectorAll ? document.querySelectorAll(_selector) : [];
	}
	$$('#test > .setOrange').addEventListener('click', function() {
		var sideMenu = $$$('.sideMenu');
		for (var i = 0; i < sideMenu.length; i++) {
			sideMenu[i].classList.remove('colorBlack');
			sideMenu[i].classList.add('colorOrange');
		}
	});

	$$('#test > .setBlack').addEventListener('click', function() {
		var sideMenu = $$$('.sideMenu');
		for (var i = 0; i < sideMenu.length; i++) {
			sideMenu[i].classList.remove('colorOrange');
			sideMenu[i].classList.add('colorBlack');
		}
	});

	/* clear background-color */
	let elements = [
		'body',
		'.wrapper',
		'.bodyContainer',
		'.bodyContainer > .sidebar',
		'.header > .logoContainer',
		'.header > .text',
		'.header > .operatingArea',
		'.bodyContainer',
		'.bodyContainer > .main'
	];

	$$('.logoContainer > img').addEventListener('dblclick', function() {
		for (var i = 0; i < elements.length; i++) {
			$$(elements[i]).style.backgroundColor = '#fff';
		}
	});
})();