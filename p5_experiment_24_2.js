let aArr = [];
let velArr = [];
let vel;
let velScale = 5;
let maxA = 100;
let maxPart = 100;
setup = () =>{
    createCanvas(400,400);
    //noStroke();
    stroke(255,100);
    noFill();
    for(let i = 0; i < maxA;i++){
        let newA = [createVector(200,200)];
        aArr.push(new Array(newA));
        velArr.push(p5.Vector.fromAngle(radians(random() * 360)).mult(velScale));
    }
}

draw = () =>{
    translate(width/2,height/2);
    background(0);
    for(let i = 0; i < aArr.length;i++){
        if(aArr[i].length >= maxPart){
            aArr[i].pop();
            //console.log("pop");
        }
        
        velArr[i].x += cos(i,frameCount * 0.01);
        velArr[i].y += sin(i,frameCount * 0.01);
        //velArr[i].add(createVector(sin(frameCount * 0.001 + noise(i,frameCount * 0.01)),cos(frameCount * 0.00024)))
        
    
        if(aArr[i][0].x <= -200 || aArr[i][0].x >= width - 200)
            velArr[i] = createVector(velArr[i].x * -1,velArr[i].y);
        if(aArr[i][0].y <= -200 || aArr[i][0].y >= height - 200)
            velArr[i] = createVector(velArr[i].x,velArr[i].y * -1);
        
        aArr[i].unshift(createVector(aArr[i][0].x + velArr[i].x,aArr[i][0].y + velArr[i].y));
    
        beginShape();
        for(let j = 0; j < aArr[i].length;j++){
            //fill(255,125);
            //rect(aArr[i][j].x,aArr[i][j].y,velScale,velScale)
            vertex(aArr[i][j].x,aArr[i][j].y);
        }
        endShape();
    }
}
