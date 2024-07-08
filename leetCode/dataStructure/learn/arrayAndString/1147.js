// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/

// Largest Number At Least Twice of Others

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  const copyNums = [...nums];
  copyNums.sort((a, b) => a - b);
  const lastIndex = copyNums.length - 1;
  const maxNum = copyNums[lastIndex];
  const secondNum = copyNums[lastIndex - 1];

  if (maxNum >= secondNum * 2) {
    return nums.indexOf(maxNum);
  } else {
    return -1;
  }
};
