/**
 *
 *
 * @author: wafash08
 * @param {string} str dash-separated words, i.e "background-color"
 * @returns {string} camelized words, that is each word after dash becomes uppercased, i.e "backgroundColor"
 * @source: https://javascript.info/array-methods
 *
 *
 */

function camelize(str) {
  return str
    .split("-")
    .map((word, idx) =>
      idx === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
