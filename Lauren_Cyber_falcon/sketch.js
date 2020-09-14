function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(235, 134, 127);
  text(mouseX, 300, 30);
  text(mouseY, 330, 30);
  //coordinates//
  if(mouseIsPressed){
  push()
  background(255, 255, 255);
  pop()
  }
  //bg turns white when pressed//
  if(mouseIsPressed){
  pop()
  for (var x=0; x <= width; x = x + 50)
  ellipse(x,100,20,20);
  push()
  }
  //dots!!//
  strokeWeight(10);
  fill(102, 65, 33);
  ellipse(200, 285, 250, 350);
  //back of hair//
  
  fill(252, 209, 172);
  rect(155, 350, 90, 200, 20, 15, 10, 5);
  ellipse(200, 250, 200, 250);
  //head//
  fill(102, 65, 33);
  rect(95, 120, 210, 100);
  //bangyang//
  line(140, 250, 170, 250);
  line(240, 250, 270, 250);
  point(160, 255);
  point(260, 255);
  //eyes//
  if(mouseIsPressed){
  push()
  strokeWeight(70)
  point(160, 255);
  point(260, 255);
  pop() 
  }
  //big eyes when pressed//
  fill(240, 26, 65);
  ellipse(203, 317, 20, 20);
  //mouf//
  
  if(mouseIsPressed){
    push()
    ellipse(203, 317, 50, 50);
    pop()
  }
  //big mouf//
  fill(84, 75, 219);
  rect(100, 410, 200, 120, 20, 15, 10, 5);
  //body//
  line(260, 450, 260, 500);
  //left arm//
  line(140, 450, 140, 500); 
  //right arm//
  
}