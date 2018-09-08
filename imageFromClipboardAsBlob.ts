export default function retrieveImageFromClipboardAsBlob(pasteEvent: ClipboardEvent) {
  return new Promise<File>((resolve,reject) => {
    if (!pasteEvent.clipboardData) {
      return reject(undefined);
    };
    var items = pasteEvent.clipboardData.items;
    if (!items) {
      return reject(undefined);
    };
    for (var i = 0; i < items.length; i++) {
      // Skip content if not image
      if (items[i].type.indexOf("image") == -1) continue;
      // Retrieve image on clipboard as blob
      var blob = items[i].getAsFile();
      return resolve(blob);
    }
  })
}