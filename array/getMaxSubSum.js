/**
 * @author: wafash08
 * @param {array} arr
 * @param {boolean} admitEmptySubarray if empty array is allowed or not
 * @returns {number} the max sum of contiguous numbers
 * @source: https://javascript.info/array
 */

/* function getMaxSubSum(arr) {
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
} */

// empty subarrays admitted
/* function getMaxSubSum(arr) {
  let bestSum = 0;
  let currentSum = 0;

  for (const number of arr) {
    currentSum = Math.max(0, currentSum + number);
    console.log(`currentSum is ${currentSum}`);
    bestSum = Math.max(bestSum, currentSum);
    console.log(`bestSum is ${bestSum}`);
  }

  return bestSum;
} */

// no empty subarrays admitted by returning empty array
/* function getMaxSubSum(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let bestSum = 0;
  let currentSum = 0;

  for (const number of arr) {
    currentSum = Math.max(0, currentSum + number);
    console.log(`currentSum is ${currentSum}`);
    bestSum = Math.max(bestSum, currentSum);
    console.log(`bestSum is ${bestSum}`);
  }

  return bestSum;
} */

// conditionally admitting empty subarray
function getMaxSubSum(arr, admitEmptySubarray = true) {
  if (!admitEmptySubarray && arr.length === 0) {
    return null;
  }

  let bestSum = 0;
  let currentSum = 0;

  for (const number of arr) {
    currentSum = Math.max(0, currentSum + number);
    console.log(`currentSum is ${currentSum}`);
    bestSum = Math.max(bestSum, currentSum);
    console.log(`bestSum is ${bestSum}`);
  }

  return bestSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-1, -2, -3])); // 0
console.log(getMaxSubSum([])); // 0
console.log(getMaxSubSum([], false)); // null
