function setup() { 
  createCanvas(600, 400);
  ellipseMode(CENTER);
  rectMode(CENTER); 
} 

function draw() { 
  background(249,209,111);
  ellipseMode(CENTER);
  noStroke();
  
  //Begin to draw the character.
  
  
  //hair
  fill(87,60,15); 
  arc(300,130,120,120,PI,TWO_PI);
  rect(300,180,120,100);
  
  //face skin
  fill(255,238,222);
  arc(300,150,80,80,0,PI);
  rect(300,145,80,30);
  triangle(275, 130, 290, 130, 285, 110);
  
  //ears
  ellipse(340,152,20,20);
  ellipse(260,152,20,20);
  
  
  //tshirt
  fill(250,204,238);
  rect(300,230,60,60);
  quad(330,200,350,220,340,230,330,225);
  quad(270,200,250,220,260,230,270,225);
  
  //arms
  fill(255,238,222);
  quad(347,220,380,250,375,255,341,225);
  quad(253,220,220,250,225,255,259,225);
  
  //neck
  rect(300,190,20,20);
  arc(300,200,40,40,0,PI);
  
  //pants
  fill(255,204,238);
  quad(330,260,325,275,275,275,270,260);
  quad(325,275,315,310,305,310,302,275);
  quad(275,275,285,310,295,310,298,275);
  
  //eyes
  fill(87,60,15);
  ellipse(280,150,14,20);
  ellipse(320,150,14,20);
  ellipseMode(CORNER);
  fill(255);
  ellipse(272,140,8,10);
  ellipse(313,140,8,10);
  
  noFill();
  stroke(0);
  curve(280,200,285,145,270,148,285,200);
  curve(325,200,330,149,314,145,320,200);
  curve(300,120,280,140,270,135,270,130);
  curve(300,120,280,140,268,140,270,130);
  curve(300,130,320,140,330,135,330,130);
  curve(300,130,320,140,332,140,330,130);
  
  //nose
  line(300,158,305,162);
  line(305,162,300,165);
  
  //mouse
  curve(285,130,290,175,310,175,315,130);

  

  //This was soo harddd!!!
  
}