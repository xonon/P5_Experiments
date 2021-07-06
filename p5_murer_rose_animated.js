let n,d,angle=0,oldX,oldY,scale=150;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  n = random(0,100);
  d = random(0,100);
  oldX=0;
  oldY=0;
  frameRate(60);
  console.log(n,d);
  background(0);
}

function draw() {
  translate(width/2,height/2);
  angle++;
  let k = angle*d;
  let r = cos(n*k);
  let x = scale * r * sin(k)
  let y = scale * r * cos(k)
  stroke(255,255,255,50);
  line(x,y,oldX,oldY);

  oldX = x;
  oldY = y;   
}