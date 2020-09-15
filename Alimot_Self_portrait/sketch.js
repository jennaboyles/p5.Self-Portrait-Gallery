function setup() {
  createCanvas(600, 600);
}

function draw() {
background(251,148,200);
  
   
//  face abstract
  //shade box 
  fill(40,2,40,60)
  square(20,75,200)
  
  //yellow
  fill(275,190,75,51)
  square (100,50,80,10)
  
  // Body
  fill(0, 81, 116);
  ellipse(200, 500, 600, 600);
  
  //face upper head
  let c = color('tan');
fill(c);
  noStroke()
  ellipse(200, 155, 245, 245);
  
   //face jawline 
 noStroke()
  
  translate(5.3,5.3)
triangle(200, 340 ,300, 210, 86, 210);
 
  
  //Eyes
  fill(48)
  ellipse(150, 115, 30, 30);//eye 1
  ellipse(250, 115, 30, 30); // eye 2
 
//nose
  stroke (5)
  line( 190,150,190,195)
  
  //hair-stuff
  curve(190,0,180,0,0,170,90,85)
curve(85,90,170,0,0,180,0,190)
  
  //Le Brow
  fill(50)
  curve(0,0,190,85,0,90,170,180)
  curve(0,0,160,75,0,80,190,200)
  
  //lips
fill(255,60,90)
square(190,190,50)
  
  //mouth activation
  //function draw()
  //mini small square 
    push();
    translate(mouseX,mouseY);
    square(190,190,20)
    pop(6);
    translate(90,15)
    square(0,30,20)
  
  //circles
   
  function draw(){
  x+=random(-speed,speed);
  y+=random(-speed,speed);
  x=constrain(x,0,width);
  y=constrain(y,0,height);
  ellipse(x,y,diameter,diameter);
  }
          
  
  




  
  
  

  
  
}