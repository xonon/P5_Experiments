let points = [];
let chunkWidth = 10;
let chunkHeight = 10;
let maxDist = 30;
function setup(){
    createCanvas(600,600);
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
        for(let j = 0; j < points.length;j++){
            let tempDist = getDist(points[i].x,points[i].y,points[j].x,points[j].y);
            if(tempDist < maxDist && points[i].pCon < 7 && points[j].pCon < 7){
                points[i].pCon++;
                points[j].pCon++;
                stroke(0,0,0,150);
                line(points[i].x,points[i].y,points[j].x,points[j].y);
            }
        }
    }
}

function getDist(x1,y1,x2,y2){
    return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}