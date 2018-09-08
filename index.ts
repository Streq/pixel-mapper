// Import stylesheets
import './style.css';
import imageFromClipboardAsBlob from "./imageFromClipboardAsBlob"
import blobToImage from "./blobToImage"
import getImageData from "./getImageData"
import {default as iterateImageData} from "./iterateImageData"
import * as Color from "./color"
import TileMap from "./tileMap"
import mapImageData from "./mapImageData"

let output = document.querySelector("[app-obj=output]") as HTMLTextAreaElement;
let mappings = document.querySelector("[app-obj=mappings]") as HTMLTextAreaElement;

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

window.addEventListener("paste", 
  (e: ClipboardEvent) => {
    let map = null;
    imageFromClipboardAsBlob(e)
      .then(blob => blobToImage(blob))
      .then(img => getImageData(img))
      .then(data => mapImageData(data, getMapFromDom()))
      .then(tileMap => writeOutputToDom(JSON.stringify(tileMap)));
  }
, false);
