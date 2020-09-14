function setup() {
  createCanvas(720, 400);
  background('purple');
  strokeWeight(2);
  smooth();
  frameRate(5);
  
}

function draw() {
  // hover mouse up and down for a sunset and sunrise 
  
  color=map(mouseY,50,360,255,0);
  background(color);
  
  fill(255,240,280);
  noStroke();
rect (mouseX,mouseY,100,100,100);
  
  fill(0,40,0);
  triangle(0,360,50,340,150,360);
  triangle(150,360,210,330,330,360);
  triangle(320,360,400,310,400,360);
  rect(0,360,700,50);
  
  cursor(CROSS);
  
  //portrait

  //hair wave
  fill("#9A362F");
  strokeWeight(1);
  stroke(0,0,0,0);
  beginShape();
  vertex(230, 200);
  bezierVertex(230, 200, 220, 240, 230, 320);
  bezierVertex(230, 260, 290, 230, 320);
  bezierVertex(230, 320, 290, 400, 225);
  bezierVertex(240, 380, 350, 400, 460, 380);
  bezierVertex(440, 380, 480, 350, 470, 320);
  bezierVertex(440, 300, 290, 470, 300);
  bezierVertex(440, 300, 490, 230, 470, 200);
  endShape(close);

  //hair top
  stroke("#9A362F");
  fill("#9A362F");
  arc(350, 210, 241, 210, -PI, 0);

  //head
  noStroke();
  fill("#F6DCB4")
  circle(350, 250, 170);
  
  //lips
   strokeWeight(1);
  stroke(255,255,255,100);
  fill("#E4A3A3");
  beginShape();
  vertex(330, 300);
  bezierVertex(330, 290, 345, 280, 350, 296);
  bezierVertex(350, 290, 350, 280, 370, 300);
  bezierVertex(370, 300, 350, 320, 330, 300);
  endShape(close);

//blush
  fill("#F6DCC9");
  arc(300, 270, 50, 50, -PI,0);
  arc(400, 270, 50, 50, -PI,0);

  //hair bangs
  fill("#861C15");
  strokeWeight(1);
  stroke("#861C15");

  //bangs - bottom right
  beginShape();
  vertex(320, 160);
  bezierVertex(340, 140, 280, 200, 450, 240);
  endShape();

  //bangs - top right
  beginShape();
  vertex(320, 165);
  bezierVertex(330, 165, 420, 120, 440, 210);
  endShape();

  //bangs - bottom left
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 160, 320, 240, 260, 240);
  endShape();

  //bangs - top left
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 265, 130, 260, 240);
  endShape();

  noStroke();

  //nose
  fill("#ECC2A9");
  ellipse(348,268,13, 15);
  fill("#E6B497");
  rect(338,260,20,10,25);
  fill("#ECC2A9");
  rect(344,240,8,20);
  
  
  //neck
  fill("#F6DCB4");
  quad(330, 310, 370, 310, 380, 370, 320, 370);

  //body
  fill("#F6DCB4");
  quad(320, 370, 380, 370, 510, 425, 190, 425);
  rect(190, 430, 320, 70);
  
  
  //eye

  for(let x = 30; x < width; x += 80){
    for(let y = 30; y < height; y += 80){
      drawEyes(390, 240);
       drawEyes(305, 240);
 
}
    }
  }

//blinking 

function drawEyes(x, y){
  fill(255);
  ellipse(x, y, 26, 12);

  if(random(12) < 11){
    fill("#721F0E");
   
    ellipse(x+1, y+1, 10, 10);
  }
  else {
    stroke(0);
    line(x-10, y, x + 10, y);    
  }

  //eyebrows 
   stroke(0,0,0);
  noFill();
  arc(385,248,60,50,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
  arc(310,248,60,50,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
  
  
  //I attempted to create a cloud that was able to change colors as you hit the "a" key.
//function keyTyped() {
  //if (key === 'a') {
  //  value = 255;
 // } else if (key === 'b') {
  //  value = 0;
  
}