let colors = [[139,69,19],[210,105,30],[255,20,147],[106,90,205],[127,255,212],[60,179,113],[173,255,47],[255,165,0],[250,128,114],[250,128,114]];

let randClr = colors[Math.floor(Math.random(0,colors.length) * 10)];
let off = 0,yoff = 0;

function Painter(){
    this.pos = createVector(width/2,height/2);
    this.vel = createVector(random(0,2),random(0,2));
    this.acc = createVector(0,0);
    this.scl = floor(random(5,10));
    this.maxspeed = 4;
    this.clr = colors[Math.floor(Math.random(0,colors.length) * 10)];
    
    this.update = function(){
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }
    
    this.edges = function(){
        if(this.pos.x < 0){
            this.pos = createVector(random(width),random(height));
            this.clr = this.changeColor(colors);
        } 
            
        if(this.pos.x > width){
            this.pos = createVector(random(width),random(height));
            this.clr = this.changeColor(colors);
        } 
        if(this.pos.y < 0){
            this.pos = createVector(random(width),random(height));
            this.clr = this.changeColor(colors);
        } 
        if(this.pos.y > height){
            this.pos = createVector(random(width),random(height));
            this.clr = this.changeColor(colors);
        } 
            
            
            /*this.pos.x = width;
            if(this.pos.x > width)
            this.pos.x = 0;
            if(this.pos.y < 0)
            this.pos.y = height;
            if(this.pos.y > height)
            this.pos.y = 0;
            */
        }

        this.changeColor = function(colors){
            return colors[Math.floor(Math.random(0,colors.length) * 10)];
        }
        this.applyForce = function(force){
            this.acc.add(force)
        }
        
        this.show = function(){
            //stroke(0,0,0,15);
            fill(this.clr[0],this.clr[1],this.clr[2],25);
            ellipse(this.pos.x,this.pos.y,this.scl,this.scl);
        }
    }
    
function setup(){
    createCanvas(window.innerWidth - window.innerWidth / 100,window.innerHeight - window.innerHeight / 25);
    noStroke();
    p = new Painter();
}
    
function draw(){
    //higher vector value = higher angle
    let v = noise(off,yoff) * 100;
    p.scl = noise(yoff / 10,off / 10) * 100;
    p.applyForce(p5.Vector.fromAngle(v));
    p.update();
    p.edges();
    p.show(randClr);

    off += 0.1;
    yoff += 0.02;
}