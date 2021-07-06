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
    draw(lastPoint){
        //stroke(0);
        strokeWeight = b1.size;
        stroke(this.bColor[0],this.bColor[1],this.bColor[2],this.bColor[3]);
        line(this.bVector.x,this.bVector.y,lastPoint.x,lastPoint.y);
    }
}
let colorArray = [[26, 188, 156,255],[22, 160, 133,255],[46, 204, 113,255],[39, 174, 96,255],[52, 152, 219,255],[41, 128, 185,255],[155, 89, 182,255],[142, 68, 173,255],[52, 73, 94,255],[44, 62, 80,255]];


let b1,uVec,bColor,lastPoint,percent = 0,t = 0,tAdd,iteration = 50000;
function setup(){
    createCanvas(600,600);
    background(0);
    setFrameRate(60);
    noStroke();
    tAdd = random();
    let bVec = createVector(width/2,height/2);
    bColor = random(colorArray);
    uVec = createVector(random(-2,2),random(-2,2));
    b1 = new ball(bVec,10,bColor);

    for(let i = 0; i < iteration;i++){
        drawPaint();
        if(i%(iteration / 100)==0){
            percent++;
            console.log(percent+"% completed");
        }
    }
}

function drawPaint(){
    //clear();
    lastPoint = b1.bVector;
    let rand = random(0,100);
    if(b1.bVector.x >= width || b1.bVector.x < 0){
        b1.bVector.x = random(b1.size,width-b1.size);
    }
    if(b1.bVector.y >= height || b1.bVector.y < 0){
        b1.bVector.y = random(b1.size,height-b1.size);
    }
    if(rand > 95){
        let colorRand = random(0,5);
        if(colorRand >= 4){
            bColor = random(colorArray);;
            b1.bColor = bColor;
        }
        //console.log("change");
        uVec.x = random(sin(-2),sin(2));
        uVec.y = random(sin(-2),sin(2));
        //b1.size = random(b1.size/2,b1.size+b1.size/2);
        //t = 0;
    }
    b1.bVector.x += cos(t);
    b1.bVector.y += sin(t);
    t += tAdd/10;
    
    b1.draw(lastPoint);
    b1.update(uVec);
    //console.log(b1.bVector.x,b1.bVector.y);
}

/*
    get the click point
    calculate angle of cursor after click

*/