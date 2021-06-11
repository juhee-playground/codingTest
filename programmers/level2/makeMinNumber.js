function solution(A,B){
    let answer = 0;
    A = sortArr(A, -1);
    B = sortArr(B);

    let initValue = A[0] * B[0];
    let result = A.reduce((acc, cur, i) => {
        if(i === 1) {
            acc = initValue;
        }
        cur = cur * B[i];
        return acc + cur;
    }, 0);
    answer = result;
    return answer;
}

function sortArr(arr, desc) {
    if(desc === -1) {
        arr.sort(function(a, b) {
          return a - b;
        });
    }else {
        arr.sort(function(a, b) {
          return b - a;
        });
    }
    return arr;
}