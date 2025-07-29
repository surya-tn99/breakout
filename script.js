const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 20;
let radius  = 5;

// ball moment
let dx = 1;
let dy = -1;

function eraseWholeCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}   

function drawBall(){

    eraseWholeCanvas();

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // check the ball reaches the border
    // reaches top or bottom
    if(y-radius <= 0 || y+radius >= canvas.height){
        dy = -dy;
    }
    // reaches left or right
    if(x-radius <= 0 || x+radius >= canvas.width){
        dx = -dx;
    }

    // ball position update 
    x += dx;
    y += dy; 

}

function start(){
    setInterval(drawBall, 10);
}

