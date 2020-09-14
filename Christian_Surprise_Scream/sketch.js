//used P5.JS Self Portrait by Zoe Wells for reference  (https://itp.nyu.edu/classes/cc-f18-tth/p5-js-self-portrait/)

function welcome(){
		console.log("what's up?")
	} //(not sure why message doesn't show in console)

function setup() {
  createCanvas(400, 400);
}


function draw() {
   skinLight = color(254, 255, 180);
   skinMed = color(255, 250, 155);
   skinDark = color(244, 236, 134);
   hair = color(207, 177, 99);
   shirt = color(77, 90, 100);if(mouseIsPressed){ shirt = color(235,55,55)
  } //shirt turns red when mouse clicked 
   black = color(0, 0, 0);
  
  background(100,200,300);
  
  for(let i = 0; i < width; i+=33){
    
    line(i, 0, i, 400);}
  
  noStroke();
  fill(skinMed);
  rect(165, 200, 70, 100);
  
  fill(shirt);
  rect(115, 275, 160, 130);
  
  fill(shirt);
  ellipse(130, 390, 120, 240);
  
  fill(shirt);
  ellipse(270, 390, 120, 240);
  
  
  fill(skinMed);
  ellipse(199, 275, 70, 60);
  
  fill(skinDark);
  ellipse(199, 210, 80, 100);
  
 
  fill(skinMed);
  ellipse(199, 170, 120, 160);
  
  ellipse(138, 173, 25, 35);
  ellipse(260, 173, 25, 35);
  
  
  noStroke();
  fill(skinLight);
  ellipse(199, 195, 20, 15);
  
  fill(hair);
  quad(255, 180, 225, 115, 271, 100, 257, 150);
  ellipse(240, 108, 45, 30);
  ellipse(190, 100, 100, 65);
  quad(145, 180, 155, 115, 113, 100, 137, 150);
  quad(145, 160, 165, 135, 220, 110, 157, 100);
  
  
  fill(black);
  ellipse(175, 177, 10, 12);
  ellipse(225, 177, 10, 12);
  stroke(black);
  strokeWeight(3);
  line(182, 161, 160, 160);
  line(213, 161, 233, 160);
  //line(185, 222, 215, 222);
  curve(226,221,186,221,215,229,225,223)
  

  text(mouseX,270,50)//coordinates w/ mouse
  text(mouseY,300,50)
  
  if(mouseIsPressed){
    ellipse(200,225,35,30) //mouth opens when mouse is clicked (shirt also turns red when mouse is clicked)
  
  }
}