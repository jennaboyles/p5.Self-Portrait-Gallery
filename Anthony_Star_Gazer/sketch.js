/*
  Anthony Beltran - abeltr21
  Art 150: Week 3
  Star Gazer
*/

// Set up global array of stars
var stars = [];

// Toggle star animation
var toggleStars = false;
// Store 100 stars of different size in a random position.
function drawSky() {
  for (var i = 0; i < 100; i++) {
  stars[i] = new Star();
  stars[i].draw();
  }
}

// Set background color
// Documentation: https://p5js.org/examples/color-linear-gradient.html
function setGradient() {
  noFill();
  for (var i = 0; i <= 0 + 550; i++) {
    var inter = map(i, 0, 0 + 550, 0, 1);
    var c = lerpColor(color(208, 80, 7), color(182, 217, 219), inter);
    stroke(c);
    line(0, i, 0 + width, i);
  }
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  frameRate(30);
  setGradient();
  drawSky();
}

function drawGrid() {
  fill(255);
  line(0,200, 400,200)
  line(200,0,200,400)
}

function drawHill() {
 fill('#0d6318');
 stroke(1);
 strokeWeight(2);
 arc(200, 400, 500, 200, PI, TWO_PI);
 noStroke();
}

function drawShoes() {
 fill('white');
 // Left shoe
 beginShape();
 curveVertex(160, 350);
 curveVertex(160, 350);
 curveVertex(180, 350);
 curveVertex(180, 340);
 curveVertex(170, 340);
 curveVertex(160, 345);
 curveVertex(160, 350);
 curveVertex(160, 350);
 endShape();

 // Right shoe 
 beginShape();
 curveVertex(240, 350);
 curveVertex(240, 350);
 curveVertex(220, 350);
 curveVertex(220, 340);
 curveVertex(230, 340);
 curveVertex(240, 345);
 curveVertex(240, 350);
 curveVertex(240, 350);
 endShape();
}

function drawPants() { 
 fill('#35509c');
 beginShape();
 curveVertex(170, 345);
 curveVertex(170, 345);
 curveVertex(178, 345);
 curveVertex(180, 300);
 curveVertex(220, 300); 
 curveVertex(222, 343);
 curveVertex(230, 343);
 curveVertex(230, 285);
 curveVertex(170, 285);
 curveVertex(170, 343);
 curveVertex(170, 343);
 endShape();
}

function drawShirt() {
 fill(0);
  
 // Torso
 beginShape();
 vertex(160, 288);
 vertex(200, 290);
 vertex(240, 288);
 vertex(235, 230);
 vertex(170, 230);
 vertex(160, 288);
 endShape();

 // Sleeves
 strokeWeight(0);
 triangle(165, 250, 149, 245, 170, 230); 
 triangle(238, 250, 254, 245, 235, 230); 
  
 // Add shirt lines
 strokeWeight(3);
 line(165, 250, 149, 247);
 line(238, 250, 254, 247);
  
 arc(202, 245, 105, 80, PI, TWO_PI);
 
 // Add shirt lines above shoulders
 line(240, 285, 235, 240);
 line(169, 240, 160, 288); 
}

function drawHands() {
 fill('#ffcc99');
 // Left arm
 beginShape();
 vertex(145, 275);
 vertex(151, 245);
 vertex(163, 247);
 vertex(156, 276);
 endShape();
 // Left hand
 beginShape();
 vertex(145, 274);
 vertex(146, 279);
 vertex(147, 280);
 vertex(149, 279);
 vertex(150, 281);
 vertex(152, 279);
 vertex(155, 281);
 vertex(156, 276);
 endShape();
  
 // Right arm
 beginShape();
 vertex(245, 275);
 vertex(241, 245);
 vertex(252, 245);
 vertex(257, 273);
 endShape();
 // Right hand
 beginShape();
 vertex(245, 273);
 vertex(246, 279);
 vertex(247, 280);
 vertex(249, 279);
 vertex(250, 281);
 vertex(252, 279);
 vertex(255, 281);
 vertex(257, 273);
 endShape();
}

function drawHead() {
 fill('#ffcc99');
 // Neck
 beginShape();
 vertex(185, 200);
 vertex(186, 210);
 vertex(195, 211);
 vertex(200, 212);
 vertex(205, 211);
 vertex(215, 210);
 vertex(214, 200);
 endShape();

 ellipse(198, 157, 90, 90);
}

function drawFace() {
  stroke(1);
  strokeWeight(2);
  fill(255)
  // Left eye
  ellipse(180, 160, 25, 20);
  fill(0);
  strokeWeight(3);
  ellipse(180, 160, 15, 10);
  line(175,150,190, 150);
  
  // Right eye
  strokeWeight(2);
  fill(255)
    ellipse(220, 160, 25, 20);
  fill(0);
  strokeWeight(3);
  ellipse(220, 160, 15, 10);
  line(225,150,210, 150);
  
  // Mouth
  noFill();
  arc(200, 180, 30, 10, 0, PI);


  
  // Cheeks
  fill('#f5cef2')
  noStroke();
  ellipse(172, 178, 17,15);
  ellipse(228, 178, 17,15);
}

function drawHair() {
  noStroke();
  fill('#914f41');
  triangle(153, 160, 145, 132, 160, 132);
  triangle(233, 137, 245, 137, 243, 155);
  fill('#753729');
  beginShape();
  curveVertex(200, 100);
  curveVertex(200, 100);
  curveVertex(240, 120);
  curveVertex(245, 140);
  curveVertex(200, 143);
  curveVertex(145, 133);
  curveVertex(135, 115);
  curveVertex(135, 115);
  endShape();
  beginShape();
  vertex(135, 115);
  vertex(133, 111);
  vertex(201, 101);
  endShape();
  beginShape();
  vertex(150, 110);
  vertex(145, 105);
  vertex(201, 101);
  endShape();
  beginShape();
  vertex(170, 105);
  vertex(165, 95);
  vertex(201, 101);
  endShape();
}

// I was gonna add a shape around the mouth with low opacity to represent a beard but using any of the ALPHA value params in fill(), color(), etc didn't work. 
function drawBeard() {
  arc(198, 175, 84, 55, 0, PI);
}

// Toggles star animation on/off
function mousePressed() {
  toggleStars = !toggleStars;
}

function draw() { 
  // If the mouse press is detected then toggle the star animation on/off.
  if (toggleStars) {
    setGradient();
    for (var i = 0; i < 100; i++) {
    stars[i].draw();
  }
    
  }
  noStroke();  
  strokeWeight(3);
  drawHill();
  drawHands();
  drawPants();
  drawShoes();
  drawShirt();
  drawHead();
  drawFace();
  drawHair();
  
  strokeWeight(1);
  drawGrid();

}

// Star class taken from:
// Project2_Twilight jmbuck
// https://editor.p5js.org/jmbuck/sketches/wSkNFwha6
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.25, 3);
    this.t = random(TAU);
  }

  draw() {
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 2;
    noStroke();
    fill(255);
    ellipse(this.x, this.y, scale, scale);
  }
}