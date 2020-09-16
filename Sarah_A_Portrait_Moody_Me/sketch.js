// I referenced "Interactive Self Portrait"by falsesugar


let hairdye = {
  r: 220,
  g: 47,
  b: 37, 
};

let value= 33

function welcome(){
		console.log("welcome to my portrait!")
	}




function setup() {
  
  welcome() 
  createCanvas(330, 400);
}

function draw() {
  background(250,235,250);
  fill(0,1,4)
  text(mouseX,200,50)//coordinates w/ mouse
  text(mouseY,230,50)
  
  

  
 //hair outline
  noStroke()

  arc(248, 170, 118, 89, -PI, 0) //top of head
  rect(188,168,119,119)//hair length
 
 
  
  //colorchanging hair,,,I dye my hair a lot(loop)

  hairdye.r = random(229, 123);
  hairdye.g = random(115, 36);
  hairdye.b = random(115, 28);
    fill(hairdye.r, hairdye.g, hairdye.b);
  arc(248, 170, 118, 89, -PI, 0) //top of head
  rect(188,168,119,119)//hair length
  beginShape();
 
  //^ I dont even know how this coding works and I was trying to make it slower but it kept giving me errors. 
  
  //face
   fill(253, 235, 208 )
   ellipse(248,200,100)
  
  
  
  //colorchanging for bangs(loop)
    hairdye.r = random(229, 123);
    hairdye.g = random(115, 36);
    hairdye.b = random(115, 28);
  fill(hairdye.r, hairdye.g, hairdye.b);
  
  
  //bang
  vertex(294, 182);
    bezierVertex(287, 191, 230, 140, 235, 140);
    endShape();
  
  beginShape();
  vertex(294, 182);
    bezierVertex(207, 141, 230, 140, 254, 140);
    endShape();
  
  
  //conditional below,,,cheeks
  fill(253, 235, 208)//skin color when mouse isnt over     body
  
  
  //-blushes when you put mouse over/near body
  if(mouseX > 200) if(mouseY > 125) {
    fill(255, 51, 255)
  }

  //cheeks/blush
  ellipse(223,217,13)
  ellipse(273,217,13)
  
   //eyes
  fill(255,255,255)
  ellipse(233,185,20)
  ellipse(265,185,20)
  fill(20,90,50)
  ellipse(233,190,12)
  ellipse(265,190,12)
  
  
  //earrings
  fill(220,249,223)
  ellipse(198,216,9)
  ellipse(298,216,9)
  
  //heart,,, i referenced "hearts in three forms-8th"by saberkhan
     fill(233, 30, 99)
      arc(188, 169, 10, 15, PI, 0);
	    arc(198, 169, 10, 15, PI, 0);
	      triangle(183, 169, 203, 169, 193, 178);
  
  //lips
  fill(240, 98, 146)
  arc(250, 230, 15, 10, PI, 0);
	
  //eyebrows
  fill(109, 76, 65)
  triangle(228,168,221,172,242,169)
  triangle(273,168,279,172,257,169)
  
  
  //turtleneck,,,it changes color when you click on it.
  
  
  //I struggled to figure out different colors, I wanted to change it from light pink to blue but I tried a bunch of different numbers in the values and it didnt do anything,thats why it says 33,, i don't even know what the 33 does
  
      fill(value);
  rect(215, 250, 62, 152);
  rect(206,271,80,140);
 
}
function mousePressed() {
  if (value === 33) {
    value = 255;
  } else {
    value = 33;
  }
  
 
  
  
}

