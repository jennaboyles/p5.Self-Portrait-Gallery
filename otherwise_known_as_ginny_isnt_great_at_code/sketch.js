let y;
let num = 200;
//as part of my iteration 
var button;
var bgcolor;
function setup() {
  createCanvas(400, 400);
  	r = random(255);
	g = random(255);
	b = random(255);
	button = createButton("click for surprise!");
	button.mousePressed(changeColor);
	button.position(35, 360);
    //zipper - not working fsr, figure out how later w/ help
  fill(51);
  y = 40;
  for (let i = 0; i < num; i++) {
    rect(295, y, 30, 10);
    y += 20;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(315, y, 30, 10);
    y += 20;
  }
}
function draw() {
  background(r, g, b)
  //N's life hack to tell coordinates
  text(mouseX,300,30)
  text(mouseY,330,30) 
    noStroke()
    fill(137, 142, 145);
  rect(100, 250, 200, 50, 20); //arm
    fill(250, 232, 212); //skin color
    ellipse(107, 207, 150); //the base of my hand as a circle
    fill(245, 236, 220);
  noStroke();
    fill(0, 0, 0)
  //drawing a heart for my tattoo
  fill(0,0,0) // black
  ellipse(71, 194, 50); //left top
  fill(0,0,0) //black
	ellipse(115, 190, 50); //right top
  triangle(75, 219, 125, 215, 100, 250); //initial bottom triangle
  triangle(48, 206, 137, 203, 100, 250); //fills in rest of bottom t
  fill(250, 232, 212);
  //line(x1, y1, x2, y2)
  //peace sign
  fill(250, 232, 212);
  triangle(124, 140, 128, 22, 142, 155); //middle finger
  triangle(62, 145, 44, 34, 90, 155); //ring finger
  fill(84, 22, 18);
  triangle(50, 75, 41, 22, 58, 75); //nail polish on middle finger 
  triangle(124, 70, 130, 22, 132, 70); //nail polish on ring       finger
  fill(137, 142, 145);
  circle(300, 115, 200); //hood of my hoodie
  fill(245, 236, 220);
  circle(300, 115, 150); //my head 
  fill(250, 232, 212); //Jenna added. copied color
  fill(137, 142, 145);
  rect(215, 200, 300, 300, 20);//bottom of my hoodie
  fill(0,0,0); //black
  square(295, 200, 300, 20);//phone for selfie
  fill(255,255,255);
  circle(276, 106, 30);//left eye
  circle(328, 106, 30); //inner eye
  fill(36, 189, 209);
  circle(276, 106, 20); //right eye
  circle(328, 106, 20); //inner eye
  fill(173, 236, 237)
  arc(300, 125, 150, 150, 0, radians(180), PIE); //mask
  fill(120, 105, 65);
	ellipse(270, 80, 20, 10); //left eyebrow
	fill(120, 105, 65);
	ellipse(330, 80, 20, 10); //right eyebrow
}
function changeColor(){
	r = random(255);
	g = random(255);
	b = random(255);
}
