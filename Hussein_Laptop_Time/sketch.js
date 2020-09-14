
let bgR = 255;
let bgG = 195;
let bgB = 135;

let screenColorR = 0;
let screenColorG = 149;
let screenColorB = 255;

function changeScreenColor() {
    screenColorR = random(255);
    screenColorG = random(255);
    screenColorB = random(255);
}
function setup() {
  createCanvas(400, 400);
  frameRate(2);
  
  
}

function draw() {
  clear();
  background(bgR, bgG, bgB);
  noFill();
  stroke(36, 21, 22);
  strokeWeight(1.5)
  for(let i = 0; i< 5000; i++){ // hair
  let curVal = random(4);
  stroke(36, 21, 22, random(255));
    arc(random(100) + random(100) + random(100) + random(100), random(100) + random(100) + random(100) + random(100), random(100), random(100), curVal, random(3) + curVal);
  }
  stroke(bgR,bgG,bgB);
  strokeWeight(200);
  ellipse(200, 200, 500, 450); // border for hair 
  
  
  
  fill(219, 157, 123);
  strokeWeight(0);        //  face
  for(let i = 0; i< 50; i++){
  ellipse(200, 200+i, 100 - (i/5), 60);
  }
  
  
  fill(80);
  let lensPosX = 165;
  let lensPosY = 210;
  rect(lensPosX, lensPosY, 30, 5);  //  left lense
  arc(lensPosX+15, lensPosY+5, 30, 10, 0, PI);
  strokeWeight(2);
  stroke(0);
  line(150,208, 165,212); // left
  line(195,212, 205,212); // bridge
  line(235,212, 250,208); // right
  strokeWeight(0);

  lensPosX = 205;
  lensPosY = 210;
  rect(lensPosX,lensPosY, 30, 5);  //  right lens
  arc(lensPosX+15, lensPosY+5, 30, 10, 0, PI);
  

  
  // fill(80,129,34, 200);
  // rect(100, 250, 200, 100);
  strokeWeight(2);
  stroke(240);
  fill(75);
  quad(75, 250, 100, 350, 300, 350, 325, 250); // laptop
  noFill();
  stroke(226, 148, 255);
  ellipse(200,275,20,15); // design
  stroke(255, 56, 56)
  ellipse(125,325,20,15);
  stroke(69, 255, 81);
  ellipse(275,325,20,15);
  
  if(mouseIsPressed){
    changeScreenColor();
    for(let i = 0; i < 60; i++){  // change screen light
      stroke(screenColorR, screenColorG, screenColorB, 60-i);
      line(75-i/2, 249-i,325+i/2, 249-i);
      // stroke(screenColorR, screenColorG, screenColorB, 60-i);
    } 
  }
  else{
    strokeWeight(1);
    for(let i = 0; i < 60; i++){  // blue screen light
      stroke(screenColorR, screenColorG, screenColorB, 60-i);
      line(75-i/2, 250-i,325+i/2, 250-i);
    }
  }
}