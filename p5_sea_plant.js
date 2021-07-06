function setup(){
    createCanvas(500,500);
    translate(width/2,height);
    let scl = 25;
    let plants = 10;
    let plantsArr = [];

    for(let i = 0; i < plants;i++){
        let growStages = random(5,30);
        let tempPlant = createVector(0,0);
        let tempPlantNext = tempPlant.copy();
        for(let gS = 0; gS < growStages;gS++){
            let n = noise(gS,i) * PI;
            let tempGrowthVec = p5.Vector.fromAngle(n);
            tempPlantNext.x += tempGrowthVec.x;
            tempPlantNext.y -= noise(gS,i);
            stroke(127,255,0,(255/plants) * i);
            strokeWeight(25);
            line(tempPlant.x * scl,tempPlant.y * scl,tempPlantNext.x * scl,tempPlantNext.y * scl);
            tempPlant = tempPlantNext.copy();
        }
    }

}

