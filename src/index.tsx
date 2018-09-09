// Import stylesheets
import './style.css';
import imageFromClipboardAsBlob from "./imageFromClipboardAsBlob"
import blobToImage from "./blobToImage"
import getImageData from "./getImageData"
import mapImageData from "./mapImageData"

let output = document.querySelector("[app-obj=output]") as HTMLTextAreaElement;
let mappings = document.querySelector("[app-obj=mappings]") as HTMLTextAreaElement;
let canvas = document.querySelector("[app-obj=img]") as HTMLCanvasElement;

function getMapFromDom(){
  try{
    return new Map<string,any>(JSON.parse(mappings.value));
  }catch(e){
    return new Map<string,any>([]);
  }
}
function writeOutputToDom(val:string){
  output.value=val;
}
function drawImg(img:HTMLImageElement){
  let ctx : CanvasRenderingContext2D = canvas.getContext("2d")!;
  
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img,0,0);
}


window.addEventListener("paste", 
  (e: ClipboardEvent) => {
    let pImg = imageFromClipboardAsBlob(e)
      .then(blob => blobToImage(blob));
    
    pImg
      .then(img => getImageData(img))
      .then(data => mapImageData(data, getMapFromDom()))
      .then(tileMap => writeOutputToDom(JSON.stringify(tileMap)));

    pImg
      .then(img => drawImg(img));
  }
, false);
