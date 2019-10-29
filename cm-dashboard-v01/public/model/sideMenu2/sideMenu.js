(function($) {
	function $$(_selector) {
		return document.querySelector ? document.querySelector(_selector) : null;
	}
	function $$$(_selector) {
		return document.querySelectorAll ? document.querySelectorAll(_selector) : [];
	}
	
	let multipleExpand = true; /* 多區塊展開 */
	
	
	var sideMenu_title = $$$('.sideMenu > .title');
	for (var i = 0; i < sideMenu_title.length; i++) {
		let sideMenu = sideMenu_title[i].parentNode;
		sideMenu_title[i].addEventListener('click', function() {
			if (multipleExpand) {
				sideMenu.classList.toggle('expanded');
				$(sideMenu).find('ul').slideToggle(400);
			}
		});
	}
})(jQuery);