let points = [];

let pointSize = 5;

function setup()
{
	createCanvas(windowWidth - 5, windowHeight - 5);
}

function draw()
{
	background(34);

	for (i = 0; i < points.length; i++)
	{
		let cur = points[i];
		ellipse(cur[0], cur[1], pointSize, pointSize);
	}

	let n = points.length;
	let sumxy = 0;
	let sumx = 0;
	let sumxq = 0;
	let sumy = 0;

	for (let i = 0; i < n; i++)
	{
		let cur = points[i];
		sumxy += cur[0] * cur[1];
		sumx += cur[0];
		sumxq += cur[0] * cur[0];
		sumy += cur[1];
	}

	let m = (n * sumxy - sumx * sumy) / (n * sumxq - sumx * sumx);
	let c = (sumy - m * sumx) / n;

	stroke(255);
	strokeWeight(2);
	line(0, c, width, m * width + c);

	fill(255);
	noStroke();
	textSize(16);
	textFont('Tajawal');
	text('X: ' + mouseX, 5, 21);
	text('Y: ' + mouseY, 5, 42);
	text('Points: ' + n, 5, 68);
}

function mousePressed()
{
	if (mouseX <= width && mouseY <= height)
	{
		if (mouseButton == LEFT)
			points.push([mouseX, mouseY]);
		else if (mouseButton == RIGHT)
			points.pop();
	}
}
