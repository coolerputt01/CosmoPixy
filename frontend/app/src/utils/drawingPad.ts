import { currentTool } from "./drawTools";
import { ref } from 'vue';

let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;

let currentColor : string;

const tileSize : number =   16;
let isDrawingClickAndDrag : boolean = false;
let lastTileX: number | null;
let lastTileY : number | null;
const brushSize = ref<number>(1);

function initPad(){
    canvas = document.querySelector('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d',{ willReadFrequently: true }) as CanvasRenderingContext2D;

    canvas.width = 32 * tileSize;
    canvas.height = 32 * tileSize;
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

function getTileColor(x: number,y : number): string | null {
    const data = ctx.getImageData(x * tileSize, y * tileSize, 1, 1).data;
    return `rgba(${data[0]},${data[1]},${data[2]},${data[3]})`;
}
function fillTiles(x: number,y: number,fillColor : string){
    const target = getTileColor(x, y);
    if (!target) return;

    ctx.fillStyle = fillColor;
    const testCanvas = document.createElement("canvas");
    const testCtx = testCanvas.getContext("2d",{ willReadFrequently: true })!;
    testCtx.fillStyle = fillColor;
    testCtx.fillRect(0, 0, 1, 1);
    const newColor = testCtx.getImageData(0, 0, 1, 1).data;
    const targetRGBA = target;

    if (targetRGBA === `rgba(${newColor[0]},${newColor[1]},${newColor[2]},${newColor[3]})`) {
        return;
    }

    const queue = [{ x, y }];
    const visited = new Set<string>();

    while (queue.length) {
    const { x, y } = queue.shift()!;

    const key = `${x},${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (x < 0 || y < 0 || x >= 32 || y >= 32) continue;

    if (getTileColor(x, y) !== target) continue;

    ctx.fillStyle = fillColor;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

    queue.push({ x: x + 1, y });
    queue.push({ x: x - 1, y });
    queue.push({ x, y:y + 1 });
    queue.push({ x, y:y - 1 });
  }
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

function erasePixel(x: number,y: number){
    ctx.clearRect(x * tileSize, y * tileSize, tileSize, tileSize);
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


        ctx.fillStyle = currentColor;
        ctx.fillRect(clientX, clientY, tileSize, tileSize);
    }
}

function drawTile(x: number,y:number){

    for(let dy = Math.floor(-brushSize.value/2);dy < Math.floor(brushSize.value/2);dy++){
        for(let dx = Math.floor(-brushSize.value/2);dx < Math.floor(brushSize.value/2);dx++){
            let tileX = dx + x;
            let tileY = dy + y;
            if (tileX < 0 || tileY < 0 || tileX >= 32 || tileY >= 32) continue;

            if(currentTool.value === "pencil"){
                ctx.fillStyle = currentColor;
                ctx.fillRect(tileX*tileSize,tileY*tileSize,tileSize,tileSize);
            }else if(currentTool.value === "eraser"){
                erasePixel(tileX,tileY);
            }
        }
    }

    if (currentTool.value === "fill") {
        fillTiles(x, y, currentColor);
    }
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
export { initPad ,loop ,setColor,erasePixel,lazyDownload,brushSize};