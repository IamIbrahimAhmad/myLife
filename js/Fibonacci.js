function setup(){
    createCanvas(700, 700);
    angleMode(DEGREES);
}

let x1 = 1;
let x2 = 1;
let sum = 0;
let x1a = [];

for(let i = 0; i < 20; i++){
    console.log(x1);
    sum = x1 + x2;
    x1a[i] = x1;
    x1 = x2;
    x2 = sum;
}

function draw() {
    translate(width/2, height/2);

    background(100);
    for(let i = 0; i < x1a.length; i++){
        const fib = x1a[i];
        rect(0, 0, fib, fib)
        arc(fib, 0, 2*fib, 2*fib, 90, 180)
        translate(fib,fib);
        rotate(-90);
    }
}