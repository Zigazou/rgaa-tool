// The CSS styles will be included when the bookmarklet will be generated.
const styles = `[[[CSS:src/style.css]]]`

/**
 * Returns the styles for the new window.
 * 
 * @param {DocumentElement} - The element to get the text from.
 * @return {DocumentElement} - A style element populated with all the CSS rules.
 */
function getStyles() {
  const style = document.createElement("style")
  style.innerText = styles

  return style
}