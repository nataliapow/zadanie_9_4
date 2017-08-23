function drawTree (n) {
	var star, i, j;
	for (i=0; i < n; i++) {
		star = "";
		for (j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree (10);
