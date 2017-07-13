var a;
function setup()
{
	createCanvas(400,400,WEBGL);
}
function draw()
{
	background(51);
	camera(30,20,100)
	rotateY(frameCount*-0.02);
	rotateX(frameCount*-0.02);
	//a=mouseY/height;
	sphere(frameCount*7,27,27);
	sphere(50,50,50);
	ellipse(width/2,height/2,10,10);
	
}
function keyPressed()
{
	
}