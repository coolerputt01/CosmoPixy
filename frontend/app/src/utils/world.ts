let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

const windowWidth : number = window.innerWidth - window.innerWidth*0.05;
const windowHeight : number = window.innerHeight - window.innerHeight*0.05;
const tileSize : number = 32;

let groundImg : HTMLImageElement;

function initMap(){
    for(let x = 0;x < windowWidth/tileSize;x++){
        for(let y = 0; y < windowHeight/tileSize;y++){
            ctx.drawImage(groundImg,x * tileSize,y * tileSize,tileSize,tileSize);
        }
    }
}

function init(groundImgPath : string){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas!.width = windowWidth;
    canvas!.height = windowHeight;

    groundImg = new Image();
    groundImg.src = groundImgPath;

    groundImg.onload = () => {
        loop();
    };
}

function loop(){
    ctx!.clearRect(0,0,windowWidth,windowHeight);
    initMap();
    requestAnimationFrame(loop);
}

export { init , loop };