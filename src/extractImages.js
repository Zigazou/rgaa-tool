function extractImages() {
  const elements = document.createDocumentFragment()

  const title = document.createElement("h1")
  title.innerText = "Images"
  elements.appendChild(title)

  const table = document.createElement("table")
  table.classList.add("images-table")

  const images = document.querySelectorAll("img")
  for (let image of images) {
    let row = document.createElement("tr")

    if (isHidden(image)) {
      row.classList.add("is-hidden")
    } else {
      row.classList.add("is-visible")
    }

    let content = document.createElement("td")
    content.classList.add("image-content")

    let div = document.createElement("div")
    content.appendChild(div)
    createDataThumbnail(
      image.getAttribute("src"),
      150, 150,
      (dataURL, width, height) => {
        const thumbnail = document.createElement("img")
        thumbnail.setAttribute("src", dataURL)
        thumbnail.setAttribute("width", width)
        thumbnail.setAttribute("height", height)
        div.appendChild(thumbnail)
      }
    )
    row.appendChild(content)

    let alt = document.createElement("td")
    alt.classList.add("image-alt")
    let altValue = image.getAttribute("alt")
    if (altValue === null) {
      alt.innerText = "❎"
    } else if (altValue.trim() === "") {
      alt.innerText = "empty alt"
      alt.classList.add("is-hidden")
    } else {
      alt.innerText = altValue
    }
    row.appendChild(alt)

    let figCaption = document.createElement("td")
    figCaption.classList.add("image-figcaption")
    let figCaptionValue = getFigCaption(image)
    if (figCaptionValue === null) {
      figCaption.innerText = "no figcaption"
      figCaption.classList.add("is-hidden")
    } else {
      figCaption.innerText = figCaptionValue
    }
    row.appendChild(figCaption)


    table.appendChild(row)
  }

  elements.appendChild(table)

  return elements
}