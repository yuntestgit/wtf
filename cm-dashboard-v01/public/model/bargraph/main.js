(function() {
	function $(_selector) {
		return document.querySelector ? document.querySelector(_selector) : null;
	}

	function $$(_selector) {
		return document.querySelectorAll ? document.querySelectorAll(_selector) : [];
	}
	var bargraph = $$('.bargraph');
	for (var i = 0; i < bargraph.length; i++) {
		var items = bargraph[i].querySelectorAll('.item');
		for (var i2 = 0; i2 < items.length; i2++) {
			if (items[i2].parentNode === bargraph[i]) {
				var percent = parseFloat(items[i2].innerText) / 100;
				var width100 = bargraph[i].offsetWidth;
				var width = width100 * percent;
				items[i2].style.width = width + 'px';
			}
		}
	}
})();

(function() {
	var canvas = $('canvas');
	canvas.style.width = '600px';
	canvas.style.width = '600px';
})();
