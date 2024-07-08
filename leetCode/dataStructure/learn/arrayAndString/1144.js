// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/

// Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let pivot = 0;
  let leftSum = 0;
  let rightSum = sum;

  while (pivot < nums.length) {
    // 인덴스보다 왼쪽에 있는 값 추가 오른쪽 빼기
    // sum 값 비교
    const 기준점 = nums[pivot];
    rightSum -= 기준점;
    if (leftSum === rightSum) {
      return pivot;
    } else {
      pivot++;
      leftSum += 기준점;
    }
  }
  return -1;
};
