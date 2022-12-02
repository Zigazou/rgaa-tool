/**
 * Scroll the page screen by screen, waiting between each scroll to let the
 * browser refresh the screen, until the page bottom is reached.
 * 
 * This allows to force the loading of any lazy loaded content.
 * 
 * This function does not block.
 * 
 * @param {Number} previous - The previous position, -1 should be used at first.
 * @param {Number} delay - Time in ms to wait between each scroll.
 * @param {function} final - Function to call when the page bottom is reached.
 */
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

// Move to the start of the page.
window.scrollTo(0, 0)

scrollSlowlyTillTheEnd(
  -1,
  200,
  () => {
    // The page bottom has been reached, now run any function working on the
    // page DOM.
    const elements = document.createDocumentFragment()
    elements.appendChild(extractLinks())
    elements.appendChild(extractHeadings())
    elements.appendChild(extractImages())

    // Create the new window with all the content created.
    createPopup("RGAA tool", elements, getStyles())

    // Return the to start of the page.
    window.scrollTo(0, 0)
  }
)
