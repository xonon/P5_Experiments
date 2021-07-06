let sunR,sunO,oGap;
let pArr = [];
setup = () => {
    createCanvas(600,600);
    angleMode(DEGREES);
    translate(width/2,height/2);
    noFill();
    stroke(0,125);

    //sun diameter
    sunR = random(200,250);
    //number of orbits
    sunO = floor(random(1,5));
    text("Orbits:" + sunO,(-width/2)+10,(-height/2)+10);
    //number of planets
    let randomPlanets = floor(random(1,5));
    text("Planets:" + randomPlanets,(-width/2)+10,(-height/2)+20);

    //gap between orbits
    oGap = sunR / 4;
    //draw orbits
    /*for(let i = 1; i <= sunO;i++){
        stroke(255,0,0,255);
        circle(0,0,sunR + i * oGap);
    }*/
    //draw sun
    fill(random(125,255),random(50,125),random(0,50),255);
    circle(0,0,sunR);

    
    do{
        //creating planets
        
        let angle = floor(random(360));
        //which orbit to create
        let orbit = floor(random(1,sunO));
        let p = {x:floor(((sunR/2) + (orbit * oGap)) * cos(angle)),
                y:floor(((sunR/2) + (orbit * oGap)) * sin(angle)),
                r:floor(random(25,50))};
        
        //text(orbit,p.x,p.y);
        if(pArr.length == 0){
            pArr.push(p);
            randomPlanets--;
        }
        //checking distance
        else{
            let overlap = false;
            for(let j = 0;  j < pArr.length;j++){
                let dist = getDist(pArr[j].x,pArr[j].y,p.x,p.y);
                console.log(dist,p.r + pArr[j].r);
                if(dist <  p.r + pArr[j].r){
                    overlap = true;
                }
            }
            if(!overlap){
                pArr.push(p);
                randomPlanets--;
            }
        
        }
        
    }while(randomPlanets > 0);
    //draw planets

    noStroke();
    for(let i = 0; i < pArr.length;i++){
        let r = floor(random(255));
        let g = floor(random(255));
        let b = floor(random(255));
        fill(r,g,b,255);
        circle(pArr[i].x,pArr[i].y,pArr[i].r);
    }
}

getDist = (x1,y1,x2,y2) =>{
    return floor(sqrt(pow(x1-x2,2)+pow(y1-y2,2)));
}