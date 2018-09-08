import iterateImageData from "./iterateImageData"
import TileMap from "./tileMap"
import * as Color from "./color"

export default function mapImageData<T>(data:ImageData, map:Map<string,T>):TileMap<T>{
  let ret:Array<T> = [];
  iterateImageData(data,(p)=>{
    ret.push(map.get(Color.rgbaToString(p)));
  });
  return {
    width: data.width,
    height: data.height,
    data: ret,
  };
}
