const styles = `[[[CSS:src/style.css]]]`

function getStyles() {
  const style = document.createElement("style")
  style.innerText = styles

  return style
}