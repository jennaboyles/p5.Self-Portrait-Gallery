 
let bg;
let y = 0;


function setup() {
  
  // The background image must be the same size as the parameters. here i placed a picture of my cat because i love him and i love cats in general!
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('snoopy.jpg');
  createCanvas(690, 720);

}

  function draw() {
  background(bg);

  text(mouseX,500,30)
  text(mouseY,550,30)
  stroke(0,0,0)


  y++;
  if (y > height) {
    y = 0;
  }
  {
    //arms
    
    fill(115, 157, 209)
    rect(232,205,44,69)
    
    fill(115, 157, 209)
    rect(403,204,44,69)
    
    //hands
  
    stroke(0,0,0)
    fill(247, 201, 158)
    arc(254,277,42,52, -PI, 0, CHORD);
    
    fill(247, 201, 158)
    arc(424,277,42,52, -PI, 0, CHORD);
     
    //head
     fill(247, 201, 158)
  ellipse(340,170,230,180)
 
}
  //hair
    
  fill(84, 35, 14)
  stroke(0,0,0)
  circle(340, 60, 70);

    //ears (my ears get red easily especially when shy) (i wanted to make the ears more red but i could not figure out how to change the color...)
  let circleBlue = map(mouseY, 0, height, 0, 255);
    
    fill(247, circleBlue, 158)
  stroke(0,0,0)
  circle(220, 187,20); 
    fill(252, circleBlue, 158)
  stroke(0,0,0)
  circle(461, 187,20);
    
  //eyes
  fill(0,0,0)
  stroke(0,0,0)
  circle(380, 185,40);
  fill(0,0,0)
  circle(300, 185, 40);
  //pupils
  strokeWeight(4);
  stroke(255,255,255);
  point(300,190)
  point(380,190)
  
  //eyelids show to show calm expression when petting my cat! (hands also change movement to pet cat)
  if(mouseIsPressed){
    fill(247, 201, 158);
    stroke(0,0,0)
    arc(299,185,40,40,3.1,0);
    arc(379,185,40,40,3.1,0);
    
    
    fill(115, 157, 209)
    stroke(115, 157, 209)
    arc(424,277,42,52, -PI, 0, CHORD);
    
    fill(115, 157, 209)
    stroke(115, 157, 209)
    arc(254,277,42,52, -PI, 0, CHORD);
    
    fill(247, 201, 158)
    stroke(0,0,0)
    arc(254,277,42,52, 0,PI);
    
    fill(247, 201, 158)
    stroke(0,0,0)
    arc(424,277,42,52, 0,PI);  
    
  }
  
  //eyebrow
  stroke(84, 35, 14)
  line(280,159,294,153)
  line(397,159,382,153)
  
  //mouth
  stroke(0,0,0)
  bezier(328,225,332,232,335,232,337,232)
  bezier(348,226,345,228,348,231,337,232)
  //hair color
  fill(84, 35, 14)
  arc(340,134,209,120, -PI, 0, CHORD);
  
  
  //cheeks
  fill(247, 201, 158)//skin color when mouse isnt over cheeks
  stroke(247, 201, 158)
  //blush when mouse places over face
  if(mouseX > 336) if(mouseY > 215) {
    fill(247, 160, 160)
  }

  //blush
  ellipse(280,217,23)
  ellipse(400,217,23)
  
  
}