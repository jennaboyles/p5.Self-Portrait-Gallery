function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill(236, 171, 102);
  ellipse(165,195,15,70); //left arm
  ellipse(235,195,15,70); //right arm
  ellipse(165,230,15,20); //left hand
  ellipse(235,230,15,20); //right hand
  fill(0);
  ellipse(200,110,80,140); //hair
  fill(236, 171, 102);
  ellipse(165,100,10,20); //left ear
  ellipse(235,100,10,20); //right ear
  ellipse(200,150,15,30); //neck
  ellipse(180,160,35,15); //left shoulder
  ellipse(220,160,35,15); //right shoudler
  ellipse(165,160,15); //left circle
  ellipse(235,160,15); //right circle
  ellipse(200,100,70, 90); //head
  ellipse(190,270,15,100) //left leg
  ellipse(210,270,15,100); //right leg
  ellipse(200,190,50,80); //body
  fill(0);
  ellipse(200,70,50,30); //bangs
  ellipse(220,75,20,20); //bangs
  ellipse(180,75,20,20); //bangs
  fill(250);
  ellipse(185,100,15,5); //left eye
  ellipse(215,100,15,5); //right eye
  fill(0);
  ellipse(185,100,5,5); //left pupil
  ellipse(215,100,5,5); //right pupil
  ellipse(200,130,15,5); //mouth
  ellipse(200,115,2,2);
}

