function getText(element) {
  const text = removeLineReturn(element.innerText)
  if (text) return text

  // Look for an image with an alternative
  const image = element.querySelector('img[alt]')
  if (image && image.getAttribute("alt").trim() !== "") {
    return "🖼 " + image.getAttribute("alt")
  }

  const title = removeLineReturn(element.getAttribute("title"))
  if (title) return "🆎"

  return "❎"
}
