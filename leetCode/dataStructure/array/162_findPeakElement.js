/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if(nums.length <= 1) {
      return 0;
  }
  
  while(left < right) {
      let mid = Math.floor((left + right) / 2);
      let num = nums[mid];
      let nextNum =  nums[mid + 1];
      if(num < nextNum) {
          left = mid + 1;
      }else {
          right = mid;
      }
  }

  return left;
};