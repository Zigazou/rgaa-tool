/**
 * Returns true if an element is hidden.
 * 
 * It returns true if a display: none or visible: hidden has been set on the
 * element or on any of its ancestors.
 * 
 * @param {DocumentElement} - The element to get the text from.
 * @return {String} - The text retrieved.
 */
function isHidden(element) {
  const styles = window.getComputedStyle(element)
  const hidden = styles.display === 'none' || styles.visibility === 'hidden'

  if (element.parentElement === null) {
    return hidden
  } else if (!hidden) {
    return isHidden(element.parentElement)
  } else {
    return true
  }
}
