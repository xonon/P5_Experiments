let scale = 25;
function setup() {
  createCanvas(400, 400);
  rectMode("CENTER");
  background("#F0E68C");
  stroke("#228B22");
  strokeWeight(2);
}

function draw() {
  background("F0E68C");
  for(let i = 0; i < height;i+=scale){
    
    for(let j = 0; j < width;j+=scale){
      push();
      rotate(noise(sin(i),cos(j),frameCount * 0.017));
      rect(0,0,noise(i,j,frameCount * 0.0023) * scale,
           abs(sin(i / j * frameCount * 0.0043)) * scale);
      pop();
      translate(scale,0);
    }
    translate(-width,scale);
  }
}