function createPopup(fragment, styles) {
  const copyTab = window.open("", "_blank", "popup").document
  copyTab.title = "RGAA Tool"

  const encoding = document.createElement("meta")
  encoding.setAttribute("charset", "UTF-8")
  copyTab.head.appendChild(encoding)

  copyTab.head.appendChild(styles)
  copyTab.body.appendChild(fragment)
  copyTab.close()
}
