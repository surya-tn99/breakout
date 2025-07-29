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
    drawBoard(); // defined on below

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "#ffd900ff";
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
// Board used to user to play
let boardX = canvas.width/2;
const boardWidth = 25;
function drawBoard(){
    ctx.beginPath();
    ctx.rect(boardX, canvas.height-5, boardWidth  , 5   );
    ctx.fillStyle = "#ffd900ff";
    ctx.fill();
    // ctx.strokeStyle = "#000000ff";
    // ctx.stroke();   
    ctx.closePath();
}

function moveBoardLeft(){
    boardX = Math.max(0 ,boardX-7 )
}
function moveBoardRight(){
    boardX = Math.min(canvas.width - boardWidth , boardX+7);
}

function keyPress(e){
    console.log(e.key);
    if(e.key == "ArrowDown" || e.key == "ArrowRight"){
        moveBoardRight();
    } 
    else if(e.key == "ArrowUp" || e.key == "ArrowLeft"){
        moveBoardLeft();
    }
}

document.addEventListener("keydown",keyPress);
document.addEventListener("keyup",keyPress);

function start(){
    setInterval(drawBall, 10);
}
