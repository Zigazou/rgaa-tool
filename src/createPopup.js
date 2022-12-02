/**
 * Create a new window with title, styles and content.
 * 
 * This function considers the content to be Unicode.
 *
 * @param {String} title - The window's title.
 * @param {DocumentFragment} fragment - The element to put inside the window.
 * @param {Style} styles - The styles to apply.
 */
function createPopup(title, fragment, styles) {
  // Create the new window.
  const copyTab = window.open("", "_blank", "popup").document

  // Define metadata.
  copyTab.title = title

  const encoding = document.createElement("meta")
  encoding.setAttribute("charset", "UTF-8")
  copyTab.head.appendChild(encoding)

  // Insert styles and content.
  copyTab.head.appendChild(styles)
  copyTab.body.appendChild(fragment)

  // End! (this does not close the new window)
  copyTab.close()
}
