setup = () =>{
    createCanvas(400,600);
    rectMode(CENTER);
    
    fill(255);
    
    for(let i = 0; i <= 400;i+=100){
        for(let j = 0; j <= 600;j+=50){
            for(let k = 5; k > 0;k--){
                ellipse(i,j,k * 20);
            }
        }
    }
}
