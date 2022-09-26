function setup(){
    createCanvas(1400, 750);
}

let TV = {
    tvCase: [400, 200, 600, 350],
    tvScreen: [405, 205, 590, 340],
    colors: ["black", "black", "lightblue"]
}

let color = TV.colors[1];

function draw() {
    background(100);
    drawTV(TV, color);
}

function drawTV(TV, color){
    fill(TV.colors[0])
    rect(TV.tvCase[0], TV.tvCase[1], TV.tvCase[2], TV.tvCase[3], 10);
    fill(color)
    rect(TV.tvScreen[0], TV.tvScreen[1], TV.tvScreen[2], TV.tvScreen[3]);
}

function mousePressed(){
    if(color === TV.colors[1]){
        color = TV.colors[2];
    }else{
        color = TV.colors[1];  
    }
}