import {Pixel} from "./color"

export default function iterateImageData(data : ImageData, callback : (pixel:Pixel) => any){
  let i = 0
    , arr = data.data
    , w = data.width
//    , h = data.height
    , len = arr.length/4;

  for(; i < len; ++i){
    let pixel : Pixel = {
      r : arr[i*4 + 0],
      g : arr[i*4 + 1],
      b : arr[i*4 + 2],
      a : arr[i*4 + 3],
      x : i%w,
      y : Math.trunc(i/w)
    }
    callback(pixel);
  }
}
