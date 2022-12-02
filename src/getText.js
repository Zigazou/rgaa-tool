/**
 * Given an element, tries to get any relevant text.
 * 
 * If a text cannot be retrieved, it returns the string "❎".
 * If only a title attribute can be retrieved, it returns "🆎".
 * If only an image with an alt attribute can be retrieved, it returns the alt
 * attribute text preceded with "🖼 ".
 * 
 * @param {DocumentElement} - The element to get the text from.
 * @return {String} - The text retrieved.
 */
function getText(element) {
  const text = removeLineReturn(element.innerText)

  // Text can be retrieved, returns it.
  if (text) return text

  // Look for an image with an alternative
  const image = element.querySelector('img[alt]')
  if (image && image.getAttribute("alt").trim() !== "") {
    return "🖼 " + image.getAttribute("alt")
  }

  // No image with an alt attribute, look for a title attribute.
  const title = removeLineReturn(element.getAttribute("title"))
  if (title) return "🆎"

  // Nothing can be done for this element.
  return "❎"
}
