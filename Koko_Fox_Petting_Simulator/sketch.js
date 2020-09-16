var baseSprData = ["000000000000100000000000",
                   "000000000011410000000000",
                   "000000000121210000000000",
                   "000000011115111110000000",
                   "000001152251522251100000",
                   "000015242425242422510000",
                   "000152444442444442451000",
                   "000124242422242424221000",
                   "001522222221222252225100",
                   "001222512221522221522100",
                   "001222152251122222122100",
                   "001522155516155225125100",
                   "001525111166611555125100",
                   "001551661633366111155100",
                   "011516631333333166151110",
                   "015163331333633133611510",
                   "012133333333163333361210",
                   "122133333333316333331221",
                   "155163333333333333361551",
                   "111513333333333333315111",
                   "001216333133331333612100",
                   "001251633311113336152100",
                   "001515163336633361515100",
                   "001112511633336115211100",
                   "000001210116611012100000",
                   "000001100001100001100000"];

// bit redundant, but it works ^^;
var happySprData = ["000000000000100000000000",
                   "000000000011410000000000",
                   "000000000121210000000000",
                   "000000011115111110000000",
                   "000001152251522251100000",
                   "000015242425242422510000",
                   "000152444442444442451000",
                   "000124242422242424221000",
                   "001522222221222252225100",
                   "001222512221522221522100",
                   "001222152251122222122100",
                   "001522155516155225125100",
                   "001525111166611555125100",
                   "001551666633366111155100",
                   "011516631333333166151110",
                   "015163313133631313611510",
                   "012133333333163333361210",
                   "122133333333316333331221",
                   "155163333333333333361551",
                   "111513333333333333315111",
                   "001216333133331333612100",
                   "001251633311113336152100",
                   "001515163336633361515100",
                   "001112511633336115211100",
                   "000001210116611012100000",
                   "000001100001100001100000"];

var earSprData = ["000011100000",
                  "000012511000",
                  "000012225100",
                  "000112222510",
                  "001812222251",
                  "001812222251",
                  "017712222551",
                  "011815225551",
                  "001781555551",
                  "017781555551",
                  "017871555551",
                  "178178155551",
                  "111781155551",
                  "001110155551"];
var rotAmt = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(0); // set to 1 to show the pixel grid
  // test print each character from sprite data
  //for(var i = 0; i < baseSprData.length; i++){
  //  for(var j = 0; j < baseSprData[i].length; j++){
  //    print(baseSprData[i][j]);
  //  }
  //}
}

function draw() {
  // Cursor and ear anim update
  if(inPetRegion()){
    cursor('grab');
    background(255, 0, 128);
    if(mouseIsPressed){
      if(rotAmt < 45) rotAmt += 15;
    }
    else {
      if(rotAmt > 5) rotAmt -= 5;
      else rotAmt = 0;
    }
  }
  else {
    cursor('default');
    background(255, 78, 128);
    if(rotAmt > 5) rotAmt -= 5;
    else rotAmt = 0;
  }
  
  drawLeftEar();
  drawRightEar();
  if(mouseIsPressed && inPetRegion()) drawHappySprite();
  else drawBaseSprite();
  
  // more debug stuff
  //fill(0);
  //text("mouse: " + mouseX + ", " + mouseY, 10, 15);
}

function drawBaseSprite(){
  translate(55, 50);
  for(var i = 0; i < baseSprData.length; i++){
    for(var j = 0; j < baseSprData[i].length; j++){
      switch(baseSprData[i][j]){
        case '1': fill(0);  // line base
                  break;
        case '2': fill(63, 24, 0); // hair base
                  break;
        case '3': fill(255, 215, 191); // skin base
                  break;
        case '4': fill(127, 48, 0); // hair highlight
                  break;
        case '5': fill(47, 18, 0); // hair shadow
                  break;
        case '6': fill(217, 182, 163); // skin shadow
                  break;
        default: fill(0, 0, 0, 0); // transparent
      }
      square(j * 12, i * 12, 12);
    }
  }
  translate(-55, -50);
}

function drawHappySprite(){
  translate(55, 50);
  for(var i = 0; i < happySprData.length; i++){
    for(var j = 0; j < happySprData[i].length; j++){
      switch(happySprData[i][j]){
        case '1': fill(0);  // line base
                  break;
        case '2': fill(63, 24, 0); // hair base
                  break;
        case '3': fill(255, 215, 191); // skin base
                  break;
        case '4': fill(127, 48, 0); // hair highlight
                  break;
        case '5': fill(47, 18, 0); // hair shadow
                  break;
        case '6': fill(217, 182, 163); // skin shadow
                  break;
        default: fill(0, 0, 0, 0); // transparent
      }
      square(j * 12, i * 12, 12);
    }
  }
  translate(-55, -50);
}

function drawLeftEar(){
  translate(163, 146);
  //rotate(-mouseY);
  rotate(-rotAmt);
  for(var i = earSprData.length - 1; i > -1; i--){
    for(var j = earSprData[i].length - 1; j > -1; j--){
      switch(earSprData[i][j]){
        case '1': fill(0);  // line base
                  break;
        case '2': fill(63, 24, 0); // hair base
                  break;
        case '5': fill(47, 18, 0); // hair shadow
                  break;
        case '7': fill(229); // fur base
                  break;
        case '8': fill(178); // fur shadow
                  break;
        default: fill(0, 0, 0, 0); // transparent
      }
      square((j - 12) * 12, (i - 11) * 12, 12);
    }
  }
  //rotate(mouseY);
  rotate(rotAmt);
  translate(-163, -146);
}

function drawRightEar(){
  translate(223, 146);
  //rotate(mouseY);
  rotate(rotAmt);
  for(var i = earSprData.length - 1; i > -1; i--){
    for(var j = earSprData[i].length - 1; j > -1; j--){
      switch(earSprData[i][j]){
        case '1': fill(0);  // line base
                  break;
        case '2': fill(63, 24, 0); // hair base
                  break;
        case '5': fill(47, 18, 0); // hair shadow
                  break;
        case '7': fill(229); // fur base
                  break;
        case '8': fill(178); // fur shadow
                  break;
        default: fill(0, 0, 0, 0); // transparent
      }
      square(-(j - 12) * 12, (i - 11) * 12, 12);
    }
  }
  //rotate(-mouseY);
  rotate(-rotAmt);
  translate(-223, -146);
}

function inPetRegion(){
  if((mouseX > 100 && mouseX < 300)&& (mouseY > 100 && mouseY < 170)){
    return true;
  }
  else return false;
}