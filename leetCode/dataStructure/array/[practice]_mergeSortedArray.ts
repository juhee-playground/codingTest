function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const merged = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
    
    // nums1의 내용을 병합된 결과로 교체
    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];
    }
};
