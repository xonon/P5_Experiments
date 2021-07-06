let lines = [];
setup = () =>{
    createCanvas(400,400);
    for(let i = 0; i < 25;i++){
        let l1 = createVector(floor(random() * width),floor(random() * height));
        let l2 = createVector(floor(random() * width),floor(random() * height));
        lines.push([l1,l2]);
    }
}

draw = () =>{

    background(255);
    
    for(let i = 0; i < lines.length;i++){

        lines[i][1].x += sin(frameCount * 0.01 + i);
        lines[i][0].x += cos(frameCount * 0.01 + i);
        

        //line(lines[i][0].x,lines[i][0].y,lines[i][1].x,lines[i][1].y);
        fill(0);
        beginShape();
        for(let j = 0; j < lines.length;j++){
            let pt = doesIntersect(lines[i],lines[j]);
            if(pt){
                //line(lines[i][0].x,lines[i][1].y,pt.x,pt.y);
                //line(lines[j][0].x,lines[j][1].y,pt.x,pt.y);
                ellipse(pt.x,pt.y,5,5);
                vertex(pt.x,pt.y);
            }
        }
        endShape();
    }
    //console.log(intersect);
}


function doesIntersect(l1,l2){
    
    const x1 = l1[0].x;
    const x2 = l1[1].x;
    const y1 = l1[0].y;
    const y2 = l1[1].y;

    const x3 = l2[0].x;
    const x4 = l2[1].x;
    const y3 = l2[0].y;
    const y4 = l2[1].y;
    
    const den = (x1 - x2) * (y3 -y4) - (y1 - y2) * (x3 - x4);
    if(den == 0){
        return;
    }

    const t =  ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    
    if(t > 0 && t < 1 && u > 0){
        const pt = createVector();
        pt.x = x1 + t  * (x2 - x1);
        pt.y = y1 + t  * (y2 - y1);
        return pt;
    }
    else{
        return false;
    }
}
