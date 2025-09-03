/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    const res = arr.reduce((acc, cur) => {
        if (cur === 0) {
            acc.push(0);
            acc.push(0);
        } else {
            acc.push(cur);
        }
        return acc;
    }, [] as number[]);

    arr.splice(0, arr.length, ...res.slice(0, arr.length));
};
