let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

let currentColor : string;

const tileSize : number =   16;
let isDrawingClickAndDrag : boolean = false;
let lastTileX: number | null;
let lastTileY : number | null;

function initPad(){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = 32 * tileSize;
    canvas.height = 32 * tileSize;
    canvas.addEventListener("click",handleClick);
    canvas.addEventListener("mousedown",(e :MouseEvent)=>{
        isDrawingClickAndDrag = true;

        const { x, y } = getTilePos(e);
        lastTileX = x;
        lastTileY = y;

        drawTile(x, y);
    });
    canvas.addEventListener("mousemove",(e: MouseEvent)=>{
        if(!isDrawingClickAndDrag) return;

        const { x, y } = getTilePos(e);

        if (lastTileX !== null && lastTileY !== null) {
            dragAndDrawLine(lastTileX, lastTileY, x, y);
        }

        lastTileX = x;
        lastTileY = y;
    },{ passive: false });
    canvas.addEventListener("mouseup",()=>{
        isDrawingClickAndDrag = false;
        lastTileX = null;
        lastTileY = null;
    });
    canvas.addEventListener("mouseleave", () => {
        isDrawingClickAndDrag = false
    });
}

function getTilePos(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();

    const x = Math.floor((e.clientX - rect.left) / tileSize);
    const y = Math.floor((e.clientY - rect.top) / tileSize);

    return { x, y };
}

function dragAndDrawLine(x1 : number,y1: number,x2 : number, y2: number){
    let rx: number = Math.abs(x2-x1);
    let ry: number = Math.abs(y2-y1);

    let dx : number = x2 > x1 ? 1: -1;
    let dy : number = y2 > y1 ? 1: -1;

    let dcxv : number = rx-ry;

    while(true){
        drawTile(x1,y1);
        if (x1 === x2 && y1 === y2) break;
        let e2 = dcxv * 2;
        if(e2 > -ry){
            dcxv -= ry;
            x1 += dx;
        }if(e2 < rx){
            dcxv += rx;
            y1 += dy;
        }
    }

}

function handleClick( e : MouseEvent | TouchEvent){
    let canvasRect = canvas.getBoundingClientRect();
    if(e instanceof MouseEvent){
        let clientX = Math.floor((e.clientX - canvasRect.left) / tileSize) * tileSize;
		let clientY = Math.floor((e.clientY - canvasRect.top) / tileSize) * tileSize;


        ctx.fillStyle = currentColor;
        ctx.fillRect(clientX, clientY, tileSize, tileSize);
    }else{
        let t = e.touches[0];
        let clientX = Math.floor((t!.clientX - canvasRect.left)/tileSize) * tileSize;
		let clientY = Math.floor((t!.clientY - canvasRect.top)/tileSize) * tileSize;

        
    }
}

function drawTile(x: number,y:number){
    ctx.fillStyle = currentColor;
    ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
}

function loop(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(loop);
}
function setColor(color: string){
    currentColor = color;
}

function lazyDownload(){
    const exportCanvas : HTMLCanvasElement = document.createElement('canvas');
    exportCanvas!.width = 32;
    exportCanvas!.height = 32;

    const exportContext : CanvasRenderingContext2D = exportCanvas!.getContext('2d')!;
    exportContext.imageSmoothingEnabled = false;
    exportContext.drawImage(canvas,0,0,32,32);

    const imageDataUrl = exportCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = `tile-${Math.round(Math.random() * 100)}.png`;
    link.click();
}
export { initPad ,loop ,setColor,lazyDownload};