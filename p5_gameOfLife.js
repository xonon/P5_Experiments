let update = false;
let cellSize = 20;
let cellColor = [255,105,180];
let cellArray = [];
let cellArrNext = [];
let alone = 2;
let born = 3;
let overPopulated = 3;
let cW;
let cH;
function setup(){
    let c = createCanvas(600,600);
    c.mouseClicked(addCell);
    frameRate(23);
    createCellArr(cellArray,false);
    createCellArr(cellArrNext,true);
    cW = width / cellSize;
    cH = height / cellSize;
}

function draw(){
    drawCells();
    drawLines();
    if(update){
        updateCells();
    }
    //noLoop();
}
function changeState(){
    update = !update;
    let btnText = document.getElementById("changeStateBtn").innerHTML;
    if(document.getElementById("changeStateBtn").innerHTML == "Start"){
        document.getElementById("changeStateBtn").innerHTML = "Stop";
    }
    else{
        document.getElementById("changeStateBtn").innerHTML = "Start";
    }
}
function restart(){
    cellArray = [];
    cellArrNext = [];
    createCellArr(cellArray,false);
    createCellArr(cellArrNext,true);
    updateCells();
    drawCells();
    drawLines();
}
function addCell(){
    let cX = floor(mouseX / cellSize);
    let cY = floor(mouseY / cellSize);
    cellArray[cY][cX] = 1;
    //console.log("cx:",cX,"cy:",cY);
}
function startLife(){
    
    update = !update;
}
//create a array
//empty true if want empty array
function createCellArr(cellArr,isEmpty){
    for(let y = 0;y < height / cellSize;y++){
        let cellRow = [];
        for(let x = 0;x < width / cellSize;x++){
            if(!isEmpty){
                cellRow.push(Math.floor(Math.random () * 2));
            }
            else{
                cellRow.push(0);
            }
        }
        cellArr.push(cellRow);
    }
}
function emptyCellArr(cellArr){
    for(let i = 0; i < height/cellSize;i++){
        for(let j = 0; j < width/cellSize;j++){
            cellArr[i][j] = 0;
        }
    }
}
function drawLines(){
    //horizantal lines
    for(let i = 0; i <= width/cellSize;i++){
        line(i*cellSize,0,i*cellSize,height);   
    }
    //vertical lines
    for(let i = 0; i <= height/cellSize;i++){
        line(0,i*cellSize,width,i*cellSize);   
    }
}

function drawCells(){
    fill(255);
    rect(0,0,width,height);
    drawLines();
    for(let y = 0;y < height / cellSize;y++){
        for(let x = 0;x < width / cellSize;x++){
            if(cellArray[y][x] == 1){
                fill(cellColor);
                rect(x*cellSize,y*cellSize,cellSize,cellSize);
            }        
        }
    }
}

function updateCells(){
    //createCellArr(cellArrNext,true);
    for(let y = 0;y < height / cellSize;y++){
        for(let x = 0;x < width / cellSize;x++){

            let count = 0;

            if(y > 0){
                if(cellArray[y-1][x] == 1){
                    count++;
                }
            }
            if(y > 0 && x < cW-1){
                if(cellArray[y-1][x+1] == 1){
                    count++;
                }
            }
            if(x < cW-1){
                if(cellArray[y][x+1] == 1){
                    count++;
                }
            }
            if(y < cH-1 && x < cW-1){
                if(cellArray[y+1][x+1] == 1){
                    count++;
                }
            }
            if(y < cH-1){
                if(cellArray[y+1][x] == 1){
                    count++;
                }
            }
            if(y < cH-1 && x > 0){
                if(cellArray[y+1][x-1] == 1){
                    count++;
                }
            }
            if(x > 0){
                if(cellArray[y][x-1] == 1){
                    count++;
                }
            }
            if(y > 0 && x > 0){
                if(cellArray[y-1][x-1] == 1){
                    count++;
                }
            }
            //console.log(count);
            if(count > overPopulated && cellArray[y][x] == 1){
                cellArrNext[y][x] = 0;
            }
            if(count < alone && cellArray[y][x] == 1){
                cellArrNext[y][x] = 0;
            }
            if(count == born && cellArray[y][x] == 0){
                cellArrNext[y][x] = 1;
            }

        }
    }
    for(let y = 0;y < height/cellSize;y++){
        for(let x = 0;x < width/cellSize;x++){
            cellArray[y][x] = cellArrNext[y][x];
        }
    }
}