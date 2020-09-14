function setup() {
  createCanvas(600, 600);
}

let click = 0;

function draw() {
  background(105,105,105);
  
  body();
  face();
  hair();
  
}

function mousePressed(){
  if(click==0) click++;
  else if (click!=0) click--;
}

function face(){
  strokeWeight(1);
  fill(248,240,223);
  
  rect(150,150,299,100);
  
  x = 30;
  bezier(150, 200+x, 150, 500+x, 450, 500+x, 450, 200+x);  // face shape
  fill(255,255,255);
  bezier(200, 250, 180, 260, 250, 300, 280, 250);
  
  y = -20;
  bezier(350+y, 250, 380, 300, 400, 260, 430+y, 250);
  
  strokeWeight(1);
  
  // eyes
  //ellipse(240, 255, 25, 25)
  fill(208, 195, 191);
  arc(240, 252, 25, 25, 0, PI);
  arc(240+130, 252, 25, 25, 0, PI);
  
  //nose
  line(310, 300, 312, 340);
  line(300, 340, 312, 340);
  
  // on click change mouth
  z = 0;
  y = 0;
  
  bezier(250, 400, 300+z, 420+z, 380+z, 400+z, 350, 400);
  //random(-50,50);
  
  if(click!=0){
    fill(230, 50, 50);
    z = random(-50,50);
    y = random(-50,50);
    bezier(250, 400, 300+z, 420+y, 380+z, 400+y, 350, 400);
    
    a = random(-2,2);
    b = random(-2,2);
    arc(240+a, 252+b, 25, 25, 0, PI);
    arc(240+130+b, 252+a, 25, 25, 0, PI);
  }


}

function hair(){
  fill(50, 20, 0)
  
  // left eyebrow
  triangle(280, 250, 280, 240, 190, 230);
  triangle(280, 250, 280, 240, 190, 235);
  strokeWeight(3);
  line(280, 250, 190, 250)
  
  strokeWeight(1);
  // right eyebrow
  triangle(330, 250, 330, 240, 420, 230);
  triangle(330, 250, 330, 240, 420, 235);
  strokeWeight(3);
  line(330, 250, 420, 250)
  
  // hair
  triangle(145, 140, 160, 140, 150, 200);
  x = 300;
  triangle(135+x, 145, 160+x, 130, 150+x, 200);
  
  z = 0
  for(i=0; i<310; i=i+5){
    if(i%5) z = 5
    else if(i%15) z = 2
    else z = 0
    triangle(120+i, 75+z, 160+i, 160+z, 30+i, 50+z);
  }
  
  strokeWeight(0);
  fill(105,105,105);
  triangle(10, 50, 100, 10, 145, 170);
  
  fill(50, 20, 0)
  strokeWeight(3);
  
  
  //triangle(240, 75, 280, 160, 150, 50);

}

function body(){
  strokeWeight(1);
  fill(239,240,220);
  rect(210, 300, 180, 250);
  
  fill(0);
  triangle(210, 420, 210, 600, -200, 600);
  triangle(390, 420, 380, 600, 700, 600);
  rect(210, 520, 200, 200);


}