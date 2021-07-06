let scaleFactor = 10;
setup = () => {
    createCanvas(600,600);
    noStroke();
}

draw = ( ) =>{
    background(255);
    for(let i = 0 ; i < floor(width / scaleFactor);i++){
        for(let j = 0 ; j < floor(height / scaleFactor);j++){
            let newVX = noise(sin(i*j),frameCount * 0.008,tan(i * j + (frameCount * 0.01)));
            let newVY = noise(cos(i/j),frameCount * 0.006,tan(i / j + (frameCount * 0.023)));   
            fill(255 * noise(newVX,newVY));
            rect(i * scaleFactor,j * scaleFactor,scaleFactor,scaleFactor);
       }
    }
}