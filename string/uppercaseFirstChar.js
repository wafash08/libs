/**
 * @author: wafash08
 * @param {string} str the word you want to change
 * @returns {string} the word with uppercased first character
 * @source: https://javascript.info/string
 */

function uppercaseFirstChar(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(uppercaseFirstChar("hello")); // Hello
