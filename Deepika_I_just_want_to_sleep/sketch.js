function setup() {
  createCanvas(700, 500);
}
let value=0;


function draw() {
//   for(let i=0; i<700; i+=50){
//     stroke(1)
//     line(700,i,0,i)
//     line(i,500,i,0)
// }
  
  
}

  function mousePressed(){
    if (value===0){
      background(0,82,204)
      face()
      lips2()
      hair2()
      eyes2()
      value=1
  }
    else{
    background(153,0,77)
      face()
  lips1()
  eyes1()
  hair1()
      value=0
      
    }

  }












function face(){
  strokeWeight(1)
  stroke(204,153,102)//face
 fill(204,153,102)
  bezier(200,150,150,500,550,500,500,150)
  arc(215,275,50,50,HALF_PI,PI+HALF_PI)
  arc(485,275,50,50,PI+HALF_PI,HALF_PI)
strokeWeight(1)
stroke(96,64,32) //nose
arc(350,325,30,30,0,PI)
line(364,325,375,332)
line(336,325,325,332)
strokeWeight(3)//BROW
stroke(1)
bezier(325,245,260,235,260,235,235,250)
bezier(375,245,440,235,440,235,465,250)
strokeWeight(1)//brow bone
stroke(96,64,32)
bezier(250,245,275,245,275,245,300,250)
bezier(400,250,425,245,425,245,450,245)
}


function eyes1(){
stroke(96,64,32)//eye: set 1
fill(255,249,230)
bezier(300,270,275,260,275,260,250,270)
bezier(300,270,275,285,275,285,250,270)
fill(77,38,0)
ellipse(275,271,15,15)
fill(1)
ellipse(275,271,3,3)
fill(255)
ellipse(278,271,5,5)
line(293,267,298,263)
line(280,260,275,265)
line(270,260,265,264)
line(255,268,260,263)
stroke(96,64,32)
fill(255,249,230)
bezier(400,270,425,260,425,260,450,270)
bezier(400,270,425,285,425,285,450,270)
fill(77,38,0)
ellipse(425,271,15,15)
fill(1)
ellipse(425,271,3,3)
fill(255)
ellipse(428,271,5,5)
line(443,267,448,263)
line(430,260,425,265)
line(420,260,415,264)
line(405,268,410,263)
}
 function lips1(){
strokeWeight(1)//lips: set 1
noStroke()
fill(255,51,51)
bezier(300,360,325,390,375,390,400,360)
triangle(300,360,340,355,350,360)
triangle(400,360,360,355,350,360)
 }
function hair1(){
strokeWeight(3)//hair
stroke(1)
fill(51,26,0)
bezier(175,150,275,50,425,50,525,150)
noStroke()
bezier(350,150,300,200,300,200,200,200)
triangle(350,150,200,150,200,200)
triangle(175,150,200,250,200,150)
bezier(350,150,400,200,400,200,500,200)
triangle(350,150,500,150,500,200)
triangle(500,150,525,150,500,250)
ellipse(225,375,45,45)
ellipse(200,400,45,45)
ellipse(200,425,45,45)
ellipse(225,450,45,45)
triangle(225,450,200,490,250,490)
}
  
function eyes2(){
stroke(1)//eyes: set 2
strokeWeight(3)
line(300,275,250,260)
line(250,290,285,257)
line(400,275,450,260)
line(450,290,415,257)
stroke(128,191,255)
line(275,270,275,300)
line(425,270,425,325)
}
  
function hair2(){
strokeWeight(3) //hair:set 2
stroke(1)
fill(51,26,0)
bezier(175,150,275,50,425,50,525,150)
noStroke()
bezier(350,150,300,200,300,200,200,200)
triangle(350,150,200,150,200,200)
triangle(175,150,200,250,200,150)
bezier(350,150,400,200,400,200,500,200)
triangle(350,150,500,150,500,200)
triangle(500,150,525,150,500,250)
ellipse(350,50,200,50)
stroke(1)
strokeWeight(3)
line(250,150,200,100)
line(400,100,450,50)
line(425,195,450,250)
line(300,50,250,75)
line(200,200,150,225)
line(500,150,525,100)
}

function lips2(){
strokeWeight(1)//lips: set 2
noStroke()
fill(255,153,153)
bezier(300,360,325,350,375,350,400,360)
}
