(function() {
	let graphic = document.querySelector('.graphic');

	// let n = 200;

	// if (graphic.getContext) {
	// 	let g = graphic.getContext('2d');

	// 	function gMoveTo(x, y) {
	// 		x *= n;
	// 		y *= n;
	// 		g.moveTo(x, y);
	// 	}
	// 	function gLineTo(x, y) {
	// 		x *= n;
	// 		y *= n;
	// 		g.lineTo(x, y);
	// 	}

	// 	g.translate(graphic.width / 2, graphic.height / 2);
	// 	g.beginPath();

	// 	gMoveTo(-1, 0);
	// 	gLineTo(1, 0);
		
		
		
	// 	gMoveTo(0, -1);
	// 	gLineTo(0, 1);
	// 	g.stroke();
		
	// 	g.strokeStyle = "#ff0000";
		
	// 	gMoveTo(0, 0);
	// 	for (var x = 0; x < 1; x++) {
	// 		var y = Math.sin(x);
	// 		gLineTo(x, y);
	// 	}
	// 	g.stroke();
	// }
	
	
	let data = [
		[11, 0],
		[120, 40],
		[236, 40],
		[349, 80],
		[340, 110],
		[230, 70],
		[179, 68],
		[179, 123],
		[205, 123],
		[205, 131],
		[141, 131],
		[141, 123],
		[167, 123],
		[167, 68],
		[120, 68],
		[0, 25]
	];

	if (graphic.getContext) {
		let g = graphic.getContext('2d');
		g.beginPath();
		g.moveTo(data[0][0], data[0][1]);
		for (var i = 1; i < data.length; i++) {
			g.lineTo(data[i][0], data[i][1]);
		}
		g.fill();
	}
})();
