let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

const windowWidth : number = window.innerWidth - window.innerWidth*0.05;
const windowHeight : number = window.innerHeight - window.innerHeight*0.05;
const tileSize : number = 32;

const buffCanvas : HTMLCanvasElement = document.createElement('canvas');
const buffCtx : CanvasRenderingContext2D = buffCanvas.getContext('2d');

let groundImg : HTMLImageElement;

function initMap(){
    for(let x = 0;x < windowWidth/tileSize;x++){
        for(let y = 0; y < windowHeight/tileSize;y++){
            buffCtx.drawImage(groundImg,x * tileSize,y * tileSize,tileSize,tileSize);
        }
    }
}

function renderMap(){
    ctx.clearRect(0,0,windowWidth,windowHeight);
    ctx.drawImage(buffCanvas,0,0);
}

function init(groundImgPath : string){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas!.width = windowWidth;
    canvas!.height = windowHeight;

    buffCanvas.width = windowWidth;
    buffCanvas.height = windowHeight;

    groundImg = new Image();
    groundImg.src = groundImgPath;

    groundImg.onload = () => {
        initMap();
        renderMap();
    };
}

function loop(){
    ctx!.clearRect(0,0,windowWidth,windowHeight);
    requestAnimationFrame(loop);
}

export { init , loop };