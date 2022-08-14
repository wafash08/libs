/**
 * @author: wafash08
 * @param {string} str The sentence you want to chcek
 * @returns {boolean} if the sentence contains 'viagra' or 'xxx'
 * @source: https://javascript.info/string
 */

function checkSpam(str) {
  let spamWords = ["viagra", "xxx"];
  let lowerStr = str.toLowerCase();

  return lowerStr.includes(spamWords[0]) || lowerStr.includes(spamWords[1]);
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
