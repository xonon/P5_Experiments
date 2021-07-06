let sunR,sunO,sunRGB,oGap;
let pArr = [];
setup = () => {
    createCanvas(600,600);
    angleMode(DEGREES);
    translate(width/2,height/2);
    frameRate(23);
    noFill();
    stroke(0,125);

    //sun diameter
    sunR = random(200,250);
    //number of orbits
    sunO = floor(random(2,5));
    sunRGB = color(random(200,255),random(50,125),random(0,50),255);
    //draw sun
    fill(sunRGB);
    circle(0,0,sunR);

    //text("Orbits:" + sunO,(-width/2)+10,(-height/2)+10);
    //number of planets
    let randomPlanets = floor(random(1,5));
    //text("Planets:" + randomPlanets,(-width/2)+10,(-height/2)+20);

    console.log("Orbits:" + sunO);
    console.log("Planets:" + randomPlanets);

    //gap between orbits
    oGap = sunR / 4;
    //draw orbits
    for(let i = 2; i <= sunO;i++){
        stroke(255,0,0,255);
        circle(0,0,sunR + i * oGap);
    }
    
    do{
        //creating planets
        
        let angle = floor(random(360));
        let speed = random(3);
        //which orbit to create
        let orbit = floor(random(2,sunO));
        let r = floor(random(255));
        let g = floor(random(255));
        let b = floor(random(255));

        let p = {x:floor(((sunR/4) + (orbit * oGap)) * cos(angle)),
                y:floor(((sunR/4) + (orbit * oGap)) * sin(angle)),
                r:floor(random(25,50)),
                a:angle,o:orbit,s:speed,c:color(r,g,b,255)};
        console.log(p);
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
                //console.log(dist,p.r + pArr[j].r);
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

    drawPlanets();
}

getDist = (x1,y1,x2,y2) =>{
    return floor(sqrt(pow(x1-x2,2)+pow(y1-y2,2)));
}

calcX = (angle,orbit) =>{
    return ((sunR/4) + (orbit * oGap)) * cos(angle);
}
calcY = (angle,orbit) =>{
    return ((sunR/4) + (orbit * oGap)) * sin(angle);
}

drawPlanets = () =>{
    //draw planets

    noStroke();
    for(let i = 0; i < pArr.length;i++){
        fill(pArr[i].c);
        circle(pArr[i].x,pArr[i].y,pArr[i].r);
    }
}

draw = () =>{
    background(255);
    translate(width/2,height/2);
    //draw sun
    fill(sunRGB);
    circle(0,0,sunR);
    
    //draw orbits
    noFill();
    for(let i = 2; i <= sunO;i++){
        stroke(0);
        circle(0,0,sunR + i * oGap);
    }
    
    for(let i = 0; i < pArr.length;i++){
        pArr[i].a += pArr[i].s;
        pArr[i].x = calcX(pArr[i].a,pArr[i].o);
        pArr[i].y = calcY(pArr[i].a,pArr[i].o);
    }
    
    drawPlanets();
}
