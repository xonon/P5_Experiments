let n,d;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  n = random(0,100);
  d = random(0,100);
  frameRate(23);
  console.log(n,d);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  noFill();
  stroke(255);
  
  beginShape();
 for(let i = 0; i <= 360;i++){
   let k = i*d;
   let r = sin(n*k);
   let x = 100 * r * sin(k)
   let y = 100 * r * cos(k)
    
   
   vertex(x,y);
 }
  endShape();
  //noLoop();
}