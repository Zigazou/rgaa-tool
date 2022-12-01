function convertSize(width, height, maxWidth, maxHeight) {
  const rx = maxWidth / width
  const ry = maxHeight / height
  const ratio = Math.min(rx, ry)
  return [width * ratio, height * ratio]
}

/**
 * Convert an image given its URL to a data-URL.
 *
 * The image is converted to the JPG format.
 *
 * @param {string} src - URL of the image to convert. 
 * @param {Number} maxWidth - Max width.
 * @param {Number} maxHeight - Max height.
 * @param {function} callback - Callback to call when image has been converted,
 *                              the parameters will be a string containing the
 *                              image encoded in data-URL and the dimensions of
 *                              the image.
 */
function createDataThumbnail(src, maxWidth, maxHeight, callback) {
  const image = new Image()
  image.crossOrigin = "Anonymous"
  image.onload = function () {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    const [width, height] = convertSize(
      this.naturalWidth, this.naturalHeight,
      maxWidth, maxHeight
    )
    canvas.width = width
    canvas.height = height
    context.drawImage(this, 0, 0, width, height)
    const dataURL = canvas.toDataURL("image/png")
    callback(dataURL, width, height)
  }

  image.src = src
}