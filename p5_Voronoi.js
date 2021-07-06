/*
Voronoi Diagram Idea
create random points
connect points starting from closest
count number of points connected to each point
max number of points could connect is 3
draw lines
plus+
add opacity
calculate random points on circle then draw
*/
let points = [];
let maxPoints = 500;
let maxLines = 25;
function setup(){
    createCanvas(600,600);
    background(244,164,96);
    //creating random points
    for(let i = 0; i < maxPoints;i++){
        let point = {x:random(25,width-25), //random x
                    y:random(25,height-25),//y
                    pointsConnected:0,//number of connected points
                    number:i//which step this point created,for debug
                    };
        points.push(point);//push to array
    }

    //draw points
    drawPoints(points);

    console.log("random points created");
    //calculating distance
    //go through point array
    for(let i = 0; i < points.length;i++){
        //creating temporary distance array
        let tempDistArr = new Array();
        //go through point array
        for(let j = 0; j < points.length;j++){
            //calculate distance of point i and point j,
            //calculate every points distance between each other
            let dist = getDist(points[i].x,points[i].y,points[j].x,points[j].y);
            //push to array
            tempDistArr.push([points[j],dist]);
        }
        //sorting low to high
        let sortedDistArr = arrLowToHigh(tempDistArr);
        console.log("Distances sorted from Low to High");
        stroke(255,228,225);
        drawLines(sortedDistArr,maxLines);
        //console.log(sortedDistArr);
    }

}

function draw(){

}

function drawLines(arr,linesToDraw){
    //draw lines from sorted array
    //draw linesToDraw lines
    for(let i = linesToDraw; i >= 1;i--){
        //console.log(arr[i][0]);
        //check how many points connected to this point
        if(arr[0][0].pointsConnected < linesToDraw){
            stroke(255,255,255,25)
            line(arr[0][0].x,arr[0][0].y,arr[i][0].x,arr[i][0].y);
            //use points array,
            //increase pointsconnected value for this point and point it is connected
            arr[0][0].pointsConnected += 1;
            arr[i][0].pointsConnected += 1;
        }
    }
}

function drawPoints(arr){
    /*for(let i = 0; i < arr.length;i++){
        circle(arr[i].x,arr[i].y,5);
    }
    //background lines
    stroke(0,0,0,100);
    for(let i = 1; i < arr.length;i++){
        line(arr[i-1].x,arr[i-1].y,arr[i].x,arr[i].y);
    }*/
}

function getDist(x1,y1,x2,y2){
    return floor(sqrt(pow(x1-x2,2)+pow(y1-y2,2)));
}

function arrLowToHigh(arr){
    //creating array,using giving array could create some problems,
    //js gives you position of array not array values
    let tempArr = new Array();

    //get every value from giving array and push it to temporary array
    for(let i = 0 ; i < arr.length;i++){
        tempArr.push(arr[i]);
    }
    //sorting
    for(let i = 0; i < tempArr.length;i++){
        for(let j = 0; j < tempArr.length;j++){
            //if i is lower than j then backup i with tempVal,then change i's value to j
            //then change j's value to i's older value
            if(tempArr[i][1] < tempArr[j][1] && i != j){
                let tempVal = tempArr[i];
                tempArr[i] = tempArr[j];
                tempArr[j] = tempVal;
            }
        }   
    }

    return tempArr;
}