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