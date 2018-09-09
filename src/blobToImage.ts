export default function fileToImage (imageBlob: File){
  return new Promise<HTMLImageElement>((resolve)=>{
    if (imageBlob) {
      // Create an image to render the blob
      let img = new Image();

      // Once the image loads, render the img on the canvas
      img.onload = () => {
        resolve(img);
      };

      // Crossbrowser support for URL
      var URLObj = window.URL || window["webkitURL"];

      // Creates a DOMString containing a URL representing the object given in the parameter
      // namely the original Blob
      img.src = URLObj.createObjectURL(imageBlob);
    }
  });
}