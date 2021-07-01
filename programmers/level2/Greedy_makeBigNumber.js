function solution(number, k) {
    let answer = 0;
    let stringToNumber = [];
    stringToNumber = number.split("").map(num => Number(num));

    // 제일 큰 숫자 찾기
    let maxNumber = Math.max(...stringToNumber);
    let splitArr = number.split(maxNumber);
    // 큰 숫자의 왼쪽의 수, 오른쪽에 있는 숫자 나누기
    let leftNumbers = splitArr[0].split('').map(num => Number(num));
    let rightNumbers = splitArr[1].split('').map(num => Number(num));
    
    // K개 제거
    for(let i = 1; i <= k; i++) {
        // 오른쪽 먼저 배열 중 제일 작은 것 부터 제거
        if(leftNumbers.length !== 0) {
            removeMinNumber(leftNumbers); 
            continue;
        }
        if(rightNumbers.length > 0) {
            removeMinNumber(rightNumbers);
        }
    }
    
    answer = leftNumbers.join("") + maxNumber + rightNumbers.join("");
    return answer;
}

function removeMinNumber(arr) {
    let minNumber = Math.min.apply(null, arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === minNumber) {
            arr.splice(i, 1);
            return arr;
       } 
    }
}
