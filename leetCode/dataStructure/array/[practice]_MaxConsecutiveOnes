function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let maxCount = 0;
    // nums를 하나씩 출력한다.
    nums.forEach(num => {
      // nums[i] 가 1이면 count를 1 증가시킨다.
      if (num === 1) {
        count++;
      } else {
      // nums[i] 가 1이 아니면 count를 0으로 초기화 시킨다.
        count = 0;
      }
      // maxCount와 count 중 큰 값을 maxCount에 저장
      maxCount = Math.max(maxCount, count);
    });

    // maxCount를 반환한다.
    return maxCount;
};
