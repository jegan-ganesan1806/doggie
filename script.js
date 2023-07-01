let playerstate ="jump";
const dropdown = document.getElementById("animations");
document.addEventListener('change',function(e){
    playerstate=e.target.value;
    console.log(playerstate);
    
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.width = 600;
const CANVAS_WIDTH = canvas.height = 600;

const playerImage = new Image();
playerImage.src='shadow_dog.png';
const spritewidth = 575;//image width is 6786 total 12 columns so divide by 12
const spriteheight =523;//image height is 5230 and total 10 rows
let framex=0;
let framey=0;
let gameframe=0;
let staggerframe=6;
let val;
switch(playerstate){
    case "idle":
        val=6;
        framey=0;
        break;
    case "jump":
        val=6;
        framey=1;
        break;
    case "fall":
        val=6;
        framey=2;
        break;
    case "run":
        val=8;
        framey=3;
        break;
    case "dizy":
        val=10;
        framey=4;
        break;
    case "sit":
        val=4;
        framey=5;
        break;
    case "roll":
        val=6;
        framey=6;
        break;
    case "bite":
        val=6;
        framey=7;
        break;
    case "ko":
        val=11;
        framey=8;
        break;
    case "hit":
        val=3;
        framey=9;
        break;
}
function animate(){
    ctx.clearRect(0,0,CANVAS_HEIGHT,CANVAS_WIDTH);
    //ctx.fillRect(50,50,100,100);
    //(sx,sy,sw,sh,dx,dy,dw,dh)


    //old method
    /* ctx.drawImage(playerImage,framex*spritewidth,framey*spriteheight,spritewidth,spriteheight,0,0,spritewidth,spriteheight);
    if(gameframe%staggerframe==0)
        framex<6?framex++:framex=0;
     */

    //new method
    let pos = Math.floor(gameframe/staggerframe)%val;
    framex=pos*spritewidth;
    ctx.drawImage(playerImage,framex,framey*spriteheight,spritewidth,spriteheight
        ,0,0,spritewidth,spriteheight);
    gameframe++;
    requestAnimationFrame(animate);
}
animate();
})

console.log(playerstate);
