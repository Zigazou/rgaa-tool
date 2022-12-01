const levels = {
  "h1": 0,
  "h2": 1,
  "h3": 2,
  "h4": 3,
  "h5": 4,
  "h6": 5
}

function buryInUL(level, element) {
  if (!(level in levels)) return element

  let parent
  for (let step = 0; step < levels[level]; step++) {
    parent = document.createElement("ul")
    parent.appendChild(element)
    element = parent
  }

  return element
}

function extractHeadings() {
  const elements = document.createDocumentFragment()

  const title = document.createElement("h1")
  title.innerText = "Headings"
  elements.appendChild(title)

  const headingElements = document.createElement("ul")
  headingElements.classList.add("heading-list")

  const headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
  for (let heading of headings) {
    let element = document.createElement("li")
    element.innerText = getText(heading)
    element = buryInUL(heading.nodeName.toLowerCase(), element)
    element.classList.add(heading.nodeName)

    if (isHidden(heading)) {
      element.classList.add("is-hidden")
    } else {
      element.classList.add("is-visible")
    }

    headingElements.appendChild(element)
  }

  elements.appendChild(headingElements)

  return elements
}