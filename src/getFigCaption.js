/**
 * Tries to find the figcaption tag associated with an element.
 * 
 * It first looks for the figure tag in which the element might be.
 * From the figure tag, it will look for the first optional figcaption.
 * 
 * @param {DocumentElement} - The element.
 * @return {String} - The text of the figcaption or null if it has none.
 */
function getFigCaption(element) {
  if (element.parentElement === null) return null
  if (element.nodeName.toLowerCase() === "figcaption") return null
  if (element.nodeName.toLowerCase() !== "figure") {
    return getFigCaption(element.parentElement)
  }

  const figCaption = element.querySelector("figcaption")
  if (figCaption === null) return null
  return removeLineReturn(figCaption.innerText)
}