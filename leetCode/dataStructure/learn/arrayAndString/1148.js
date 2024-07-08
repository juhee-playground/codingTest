// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/

// Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let index = digits.length - 1;
  // 마지막 숫자에 1을 더한껀데
  // index가 가리킨 숫자가 9면 1을 더하고 index--;
  while (digits[index] === 9) {
    digits[index] = 0;
    index--;
  }

  if (index === -1) {
    digits.unshift(1);
  } else {
    digits[index] = digits[index] + 1;
  }

  return digits;
};
