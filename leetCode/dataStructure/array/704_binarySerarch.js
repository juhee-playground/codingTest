/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1
  
  while(start <= end) {
      let mid = Math.floor((start + end) / 2);
      // 중간 값이랑 타겟값 비교
      // 중간 값이 더 크면 end = mid
      // 중간 값이 더 작으면 start = mid
      if(nums[mid] === target) {
          return mid;
      }else if(nums[mid] < target) {
          start = mid + 1;
      }else {
          end = mid - 1;
      }
  }


  return -1;
};