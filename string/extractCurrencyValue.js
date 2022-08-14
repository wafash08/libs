/**
 * @author: wafash08
 * @param {string} str currency value with dollar and other signs
 * @returns {number} The number of currency with no sign;
 * @source: https://javascript.info/string
 *
 *
 * @todo try handling for currency with two or more signs
 */

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$12")); // 12
console.log(typeof extractCurrencyValue("12")); // 'number'
