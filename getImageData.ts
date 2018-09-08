export default function getImageData(img:HTMLImageElement):ImageData{
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext('2d');
  // Update dimensions of the canvas with the dimensions of the image
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0,0,canvas.width,canvas.height);
}
