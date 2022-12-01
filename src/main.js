const elements = document.createDocumentFragment()
elements.appendChild(extractLinks())
elements.appendChild(extractHeadings())

createPopup(elements, getStyles())
