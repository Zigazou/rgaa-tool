function scrollSlowlyTillTheEnd(previous, delay, final) {
  const current = window.pageYOffset
  if (current === previous) {
    final()
  } else {
    window.scrollBy(0, window.innerHeight)
    setTimeout(
      () => { scrollSlowlyTillTheEnd(current, delay, final) },
      delay
    )
  }
}

window.scrollTo(0, 0)
scrollSlowlyTillTheEnd(
  -1,
  200,
  () => {
    const elements = document.createDocumentFragment()
    elements.appendChild(extractLinks())
    elements.appendChild(extractHeadings())
    elements.appendChild(extractImages())

    createPopup(elements, getStyles())
    window.scrollTo(0, 0)
  }
)
