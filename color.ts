export interface RGBA {
  r:number,
  g:number,
  b:number,
  a:number,
}

export interface Pixel extends RGBA{
  x : number,
  y : number,
}

function lpad(num:string,c:string,n:number):string{
  return  (c.repeat(n) + num).slice(-n);
}

export function rgbaToString(c:RGBA){
  return '#' + lpad(rgbaToNumber(c).toString(16), '0', 8);
}

export function rgbaToNumber(c:RGBA){
  return 0 + 
    c.r * Math.pow(256,3) + 
    c.g * Math.pow(256,2) +
    c.b * Math.pow(256,1) +
    c.a * Math.pow(256,0);
}