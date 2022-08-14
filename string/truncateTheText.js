/**
 * @author: wafash08
 * @param {string} str The sentence you want to truncate
 * @param {number} maxlength The length of sentence you want to truncate
 * @returns {string} The truncated (if needed) string;
 * @source: https://javascript.info/string
 */

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}

console.log(truncate("buy ViAgRA now", 5));
console.log(truncate("free xxxxx", 15));
console.log(truncate("innocent rabbit", 10));
