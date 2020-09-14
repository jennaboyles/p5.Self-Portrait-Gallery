w=25
h=25
g=(0,0,0)
s= (0,0,0)
function setup() 
{
  //allows the change of colors to be less chaotic
  frameRate(6)
  createCanvas(475, 450); 
}


function draw() 
{
  //when the mouse is greater or equal to 250 on the y- axis and the mouse is pressed the background changes colors 
  //when the mouse is less than 250 on the y-axis and mouse is pressed the glasses will change from white-black
    if (mouseIsPressed) 
    {
      if (mouseY>= 250)
      {
    background(random(225), random(225), random(225))
      }
      else
      {
      for (i = 0; i < 20; i = i+20) 
      {
        g= (random(255)+i,random(255)+i, random(255)+i)
      }
    }
  }

  noStroke()
  //shirt
  fill(0)
  bit(0,375,3*w,h,s)
  bit(0,350,3*w,h,s)
  bit(25,325,2*w,h,s)
  bit(50,400,w*3,h,s)
  bit(50,425,w*13,h,s)
  bit(300,400,w*3,h,s)
  bit(350,350,w*3,h*2,s)
  bit(350,325,w*2,h,s)
  
  //skin
  fill("#ffe5cc")
  rect(0,425,w*2,h)
  rect(0,400,w*2,h)
  rect(375,400,w*2,h*2)
  rect(125,400,w*7,h)
  rect(75,325,w*11,h*3)
  rect(200,100,w*4,h)
  rect(150,200,w*8,h*2)
  rect(150,225,w*7,h*2)
  rect(150,150,w,h*2)
  rect(275,125,w,h)
  rect(275,175,w,h)
  
  //neck
  fill("#ffd7b3")
  rect(150,275,w*6,h*2)
  rect(100,300,w*2,h)
  
  //hair 
  fill("#996600")
  rect(75,275,w*3,h)
  rect(75,300,w*3,h)
  rect(75,325,w*2,h)
  rect(50,250,w*4,h)
  rect(50,100,w*6,h)
  rect(25,125,w*5,h*5)
  rect(75,75,w*11,h)
  rect(100,50,w*9,h)
  rect(300,100,w*2,h)
  
  // //glasses
  bit(150,125,w*5,h,g)
  bit(300,125,w*4,h,g)
  bit(175,150,w,h*2,g)
  bit(250,150,w,h*2,g)
  bit(300,150,w,h*2,g)
  bit(375,150,w,h*2,g)
  bit(325,175,w*2,h,g)
  bit(200,175,w*2,h,g)
  bit(275,150,w,h,g)

}


// function which allows me to use a variable for the color of the shirt and glasses in order to easily change the colors of them 
function bit(x,y,w,h,c)
{
  fill(c)
  rect(x,y,w,h)
}


