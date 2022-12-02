/**
 * Remove all line returns from a given string.
 * 
 * @param {String} - The string to clean.
 * @return {String} - The cleaned string.
 */
function removeLineReturn(string) {
  if (string === null) return null

  return string.replace(/( *(\r\n|\n|\r) *)+/gm, "\n")
               .trim()
               .replace(/(.)\n(.)/gm, "$1. $2")    
}