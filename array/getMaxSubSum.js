/**
 * @author: wafash08
 * @param {array} arr
 * @returns {number} the max sum of contiguous numbers
 * @source: https://javascript.info/array
 */

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    console.log(`partialSum is ${partialSum}`);

    maxSum = Math.max(maxSum, partialSum);
    console.log(`maxSum is ${maxSum}`);

    if (partialSum < 0) {
      console.log("i am called");
      partialSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-1, -2, -3])); // 0
