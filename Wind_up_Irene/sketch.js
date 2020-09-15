//Based on the minions and minion descriptions found in FFXIV (example: https://youtu.be/oHOIIM38Czw?t=32)


function setup() {
  createCanvas(410, 310);
  drawBG();
  minionInfo();
  drawMinionBG();
  drawMinion();
}

function draw() {
  
  //displays text bubble where mouse is pressed if mouse has been pressed in specificed coordinates
  if(mouseIsPressed && mouseX > 220 && mouseX < 400 && mouseY > 120 && mouseY < 300) {
    hiddenText();
  }
}

//creates background
function drawBG() {
  background(49, 49, 49);
}

//writes minion title and description
function minionInfo() {
  fill(238, 225, 197);
  textSize(20);
  text('Wind-up Irene', 10, 25);
  fill(255, 255, 255);
  textSize(15);
  text('Though an automaton should follow its owner wheresoever they go, this one in particular has the curious tendency to, at random, stop and then walk in an entirely different direction, as if lost. When several people raised complaints about this, the creators simply', 10, 35, 400);
  text('shrugged and said that they made it "true to life."', 10, 130, 200);
  fill(160, 160, 160);
  text('Behavior', 10, 195);
  fill(255, 255, 255);
  text('Independent', 10, 215);
}

//creates background for minion
function drawMinionBG() {
  fill(200, 159, 95);
  noStroke();
  rect(220, 120, 180, 180);
  stroke(125, 82, 40);
  strokeWeight(2);
  
  //creates dashed border
  for(let i = 0; i < 170; i+=20) {
    line(225, 125 + i, 225, 135 + i);
    line(225 + i, 125, 235 + i, 125); 
    line(395, 125 + i, 395, 135 + i);
    line(225 + i, 295, 235 + i, 295);
  }
}

//creates minion
function drawMinion() {
  
  //back of hair
  noStroke();
  fill(0);
  ellipse(310, 175, 65, 80);
  
  //torso
  noStroke();
  fill(35, 35, 35);
  rect(285, 190, 50, 50);
 
  //legs
  fill(75, 75, 75);
  rect(285, 240, 50, 10);
  rect(285, 250, 20);
  rect(315, 250, 20);
  
  //shoes
  fill(54, 54, 69);
  quad(285, 270, 305, 270, 305, 280, 275, 280);
  quad(315, 270, 335, 270, 345, 280, 315, 280);
  
  //phone
  fill(158, 158, 158);
  rect(305, 205, 15, 20, 2);
  
  //arms and hands
  fill(35, 35, 35);
  rect(275, 190, 20, 30, 10);
  rect(325, 190, 20, 30, 10);
  fill(239, 207, 175);
  rect(275, 210, 10, 25);
  rect(335, 210, 10, 15);
  rect(320, 215, 15, 10);
  circle(280, 240, 15);
  circle(320, 220, 15);
  
  //head
  noStroke();
  fill(239, 207, 175);
  circle(310, 170, 55);
  
  //face
  stroke(0);
  line(290, 180, 305, 180);
  line(315, 180, 330, 180);
  strokeWeight(6);
  point(297.5, 185);
  point(322.5, 185);
  
  //front of hair
  noStroke();
  fill(0);
  quad(295, 140, 331, 145, 350, 175, 325, 175);
  triangle(285, 150, 280, 180, 305, 140);
  
}

//creates hidden text bubble
function hiddenText() {
  stroke(0);
  strokeWeight(1);
  fill(230, 222, 212);
  rect(mouseX, mouseY, 120, 20, 20);
  noStroke();
  fill(0);
  textSize(12);
  text('<yawn> I\'m tired...', mouseX + 10, mouseY + 15);
}