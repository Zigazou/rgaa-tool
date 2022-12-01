function extractLinks() {
  const elements = document.createDocumentFragment()

  const title = document.createElement("h1")
  title.innerText = "Links"
  elements.appendChild(title)

  const links = document.getElementsByTagName("a")
  const table = document.createElement("table")
  table.classList.add("links-table")
  for (let link of links) {
    if (link.href === "") continue

    let row = document.createElement("tr")

    if (isHidden(link)) {
      row.classList.add("is-hidden")
    } else {
      row.classList.add("is-visible")
    }

    let text = document.createElement("td")
    text.classList.add("link-text")
    text.innerText = getText(link)
    row.appendChild(text)

    let title = document.createElement("td")
    title.classList.add("link-title")
    if (link.title.trim()) {
      title.innerText = link.title
    } else {
      title.innerText = "no title"
      title.classList.add("is-hidden")
    }
    row.appendChild(title)

    let href = document.createElement("td")
    href.classList.add("link-href")
    href.innerText = link.href
    row.appendChild(href)

    table.appendChild(row)
  }

  elements.appendChild(table)
  return elements
}