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
