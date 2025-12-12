let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

const tileSize : number =   16;

function initPad(){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = 48 * tileSize;
    canvas.height = 32 * tileSize;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    canvas.addEventListener("click",handleClick);
}

function handleClick( e : MouseEvent){
        let canvasRect = canvas.getBoundingClientRect();
        let clientX = ((e.clientX - canvasRect.left)/ tileSize) * tileSize;
        let clientY = ((e.clientY - canvasRect.top)/tileSize) * tileSize;

        ctx.fillStyle = 'red';
        ctx.fillRect(clientX, clientY, tileSize, tileSize);
}

function loop(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(loop);
}
export { initPad ,loop };