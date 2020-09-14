function setup() {
  createCanvas(520, 520);
}

function draw() {
    
    background(0,25);

    var sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 6)
    }

    fill (255);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
  
   //Hair
  stroke(0);
  fill(color(234,213,88));
  arc(260, 260, 310, 390, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  
  //Face 
  stroke(0);
  fill(color(244,241,166));
  ellipse(265, 250, 200, 265);
  
  //Bang
  noStroke();
  fill(color(234,213,88));
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);
  
  //right blush
	fill('#F8AE9E');
	ellipse(321, 270, 60, 60)
  //left blush
  fill('#F8AE9E');
	ellipse(199, 270, 60, 60)
  
  //glasses
  stroke(0);
  fill(color(108,184,200));
    //left eye
  ellipse(200, 230, 110, 100);
    //right eye
  ellipse(320, 230, 110, 100);
  noFill();
arc(260, 235, 22, 8, PI, TWO_PI); //bridge
  //arc(375, 180, 31, 15, PI, TWO_PI); //bridge
  //this is the reference for the nose bridge for the glasses, I just modified it for my cancas size 

  //Mouth
  noStroke()
  fill('black');
  arc(260, 325, 40, 30, 0, PI);
  
}
