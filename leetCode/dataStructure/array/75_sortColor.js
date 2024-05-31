/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zeroPointer = 0;
  let twoPointer = nums.length - 1;
  let index = 0;

  // 종료 조건: twoPointer < index
  while(twoPointer >= index) {
      // index가 2이면 twoPointer와 swap
      if(nums[index] === 2) {
          let tmp = nums[twoPointer];
          nums[twoPointer] = nums[index];
          nums[index] = tmp;
          twoPointer--;
      }else {
          if(nums[index] === 0) {
              let tmp = nums[index];
              nums[index] = nums[zeroPointer];
              nums[zeroPointer] = tmp;
              zeroPointer++;
          }

          index++;
      }
  }

  return nums;
};