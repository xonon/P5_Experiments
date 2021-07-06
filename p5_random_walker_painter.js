class ball
{
    constructor(bVector,size,bColor){
        this.bVector = bVector;
        this.size = size;
        this.bColor = bColor;
    }
    update(updateVector){
        this.bVector.add(updateVector);
    }
    draw(){
        //stroke(0);
        fill(this.bColor[0],this.bColor[1],this.bColor[2],this.bColor[3]);
        circle(this.bVector.x,this.bVector.y,this.size);
    }
}
let b1,uVec,bColor,percent = 0;
function setup(){
    createCanvas(600,600);
    background(0);
    setFrameRate(60);
    noStroke();
    let bVec = createVector(width/2,height/2);
    bColor = [232, 65, 24,50];
    uVec = createVector(random(-2,2),random(-2,2));
    b1 = new ball(bVec,15,bColor);

    for(let i = 0; i < 10000;i++){
        drawPaint();
        if(i%100==0){
            percent++;
            console.log(percent+"% completed");
        }
    }
}

function drawPaint(){
    //clear();
    let rand = random(0,10);
    if(b1.bVector.x >= width || b1.bVector.x < 0){
        b1.bVector.x = random(b1.size,width-b1.size);
    }
    if(b1.bVector.y >= height || b1.bVector.y < 0){
        b1.bVector.y = random(b1.size,height-b1.size);
    }
    if(rand >= 5){
        let colorRand = random(0,5);
        if(colorRand >= 4){
            bColor = [random(bColor[0]-10,bColor[0]+10), random(bColor[1]-10,bColor[1]+10), random(bColor[2]-10,bColor[2]+10),random(bColor[3]-5,bColor[3]+5)];
            
            b1.bColor = bColor;
        }
        //console.log("change");
        uVec.x = random(-4,4);
        uVec.y = random(-4,4);
    }

    b1.draw();
    b1.update(uVec);
    //console.log(b1.bVector.x,b1.bVector.y);
}

/*
    get the click point
    calculate angle of cursor after click

*/