let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

const tileSize : number =   16;
let isDrawingClickAndDrag : boolean = false;

function initPad(){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = 32 * tileSize;
    canvas.height = 32 * tileSize;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    canvas.addEventListener("click",handleClick);
    canvas.addEventListener("touchstart",()=>{
        isDrawingClickAndDrag = true;
    });
    canvas.addEventListener("touchmove",(e: TouchEvent)=>{
        if(isDrawingClickAndDrag){
            handleClick(e);
        }
    });
    canvas.addEventListener("touchend",()=>{
        isDrawingClickAndDrag = false;
    });
}

function handleClick( e : MouseEvent | TouchEvent){
    let canvasRect = canvas.getBoundingClientRect();
    if(e instanceof MouseEvent){
        let clientX = Math.floor((e.clientX - canvasRect.left) / tileSize) * tileSize;
		let clientY = Math.floor((e.clientY - canvasRect.top) / tileSize) * tileSize;


        ctx.fillStyle = 'red';
        ctx.fillRect(clientX, clientY, tileSize, tileSize);
    }else{
        let t = e.touches[0];
        let clientX = Math.floor((t!.clientX - canvasRect.left)/tileSize) * tileSize;
		let clientY = Math.floor((t!.clientY - canvasRect.right)/tileSize) * tileSize;

        ctx.fillStyle = "red";
        ctx.fillRect(clientX,clientY,tileSize,tileSize);
    }
}

function loop(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(loop);
}
export { initPad ,loop };