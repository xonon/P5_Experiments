let points = [];
let chunkWidth = 20;
let chunkHeight = 30;
let maxConnected = 3;
let minGap = 30;
function setup(){
    createCanvas(600,600);
    background(0,255,127);
    for(let i = 0; i < height/chunkHeight;i++){
        for(let j = 0; j < width/chunkWidth;j++){
            let x = floor(random(j * chunkWidth, (j * chunkWidth) + chunkWidth));
            let y = floor(random(i * chunkHeight, (i * chunkHeight) + chunkHeight));
            points.push({x:x,
                        y:y,
                        pCon:0});
            //circle(x,y,5);
        }   
    }

    for(let i = 0; i < points.length;i++){
        //let distArr = [];
        fill("rgb(" + random(0,50) + "%," + random(0,75) + "%," +random(0,50) + "%)");
        noStroke();
        beginShape();
        if(points[i].pCon < maxConnected){
            //points[i].pCon++;
            vertex(points[i].x,points[i].y);
            for(let j = 0; j < points.length;j++){
                let tempDist = getDist(points[i].x,points[i].y,points[j].x,points[j].y);
                if(tempDist < minGap && points[j].pCon < maxConnected){
                    points[i].pCon++;
                    points[j].pCon++;
                    //stroke(0,0,0,150);
                    vertex(points[j].x,points[j].y);
                }
            }
        }
        endShape(CLOSE);
    }
}

function getDist(x1,y1,x2,y2){
    return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}