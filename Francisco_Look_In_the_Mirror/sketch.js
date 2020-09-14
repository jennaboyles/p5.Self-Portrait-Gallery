

function setup() {
  createCanvas(480, 640); // create canvas

}


function draw() {
  background(255);


  DrawHead(); // draws head
  DrawGlasses(); // draw glasses

//CONDITIONAL Statment to Wink when mouse is pressed
  if (mouseIsPressed) {
    DrawWink();
  } else {
    DrawEye();
  }

DrawFrame(); //draws frame
}

function DrawHead() {
  //--- top of head---
  beginShape();
  noFill();
  stroke(0);
  strokeWeight(10);
  vertex(154, 289);
  bezierVertex(154, 289, 147, 208, 253, 209);
  bezierVertex(253, 209, 316, 224, 315, 269);
  endShape();


  //--- beard---

  beginShape();
  fill(0);
  strokeWeight(1);
  vertex();
  bezierVertex(147, 341, 154, 331, 164, 342);
  bezierVertex(164, 342, 137, 457, 263, 446);
  bezierVertex(263, 446, 338, 448, 319, 334);
  bezierVertex(319, 334, 324, 329, 332, 337);
  bezierVertex(332, 337, 359, 492, 260, 495);
  bezierVertex(260, 495, 146, 510, 147, 341);
  endShape();

  //mouthache

  beginShape();
  noFill(0);
  strokeWeight(15);
  vertex(213, 446);
  bezierVertex(213, 446, 185, 387, 245, 374)
  bezierVertex(245, 374, 300, 366, 290, 444)
  endShape();


  //--- nose ---

  beginShape();
  strokeWeight(7);
  vertex(241, 322);
  vertex(241, 336);
  bezierVertex(241, 336, 257, 335, 257, 346);
  bezierVertex(257, 346, 258, 357, 241, 355);

  endShape();

  //--- mouth ----
  line(238, 414, 264, 410);
}


function DrawGlasses() { //--function for drawing glasses--
  // ---glasses --- 
  strokeWeight(8);
  ellipse(193, 308, 60, 60);
  ellipse(288, 308, 60, 60);
  line(223, 308, 253, 308);

  //--left handle---
  beginShape();
  vertex(130, 321)
  bezierVertex(130, 321, 131, 311, 142, 309);
  vertex(163, 307);
  endShape();

  //--right handle---
  beginShape();
  vertex(343, 324);
  bezierVertex(343, 324, 344, 314, 336, 310);
  vertex(319, 309);
  endShape();
}


function DrawEye() { // Function drawing the eye
  // ---eye/pupil---
  noStroke();
  fill(0);
  ellipse(203, 310, 10, 10);
  ellipse(283, 310, 10, 10);

}

function DrawWink() {
  
  // --- wink ---
  strokeWeight(7);
  stroke(0);
  line(195, 302, 208, 310);
  line(195, 315, 208, 310);
  noStroke();
  fill(0);

  ellipse(283, 310, 10, 10);
  
}

//avatar frame with FORLOOP
function DrawFrame(){
  for(let i =0; i<width ; i+=30){
    fill(0);
    rect(i,height-100, 20,20)
    rect(i,100, 20,20)
  }
}