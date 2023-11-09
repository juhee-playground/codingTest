// 매일코테 #백준 #Javascript #클래스2 #소수찾기

// 타이틀: 1978 소수찾기
// # 문제: 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

/* 
입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 
다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.
*/

// 입력 예시
/* 
4
1 3 5 7
*/

// 출력 예시
// 3


const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const [n, ...arr] = require('fs').readFileSync(readFileSyncAddress).toString().trim().split(/\s/);

let count = 0;
for(let i = 0; i < arr.length; i++) {
    if(isDecimal(Number(arr[i]))) {
        count++;
    }
}

console.log(count);

function isDecimal(number) {
    let flag = true;
    if(number === 1) {
        return false;
    }
    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            if(i !== 1 && i !== number) {
                flag = false;
                return flag;
            }
        }
    }
    return flag;
}