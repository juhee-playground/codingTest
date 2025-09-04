function removeElement(nums: number[], val: number): number {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        // 배열을 돌려서 val랑 같으면 제거
        if(nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};
