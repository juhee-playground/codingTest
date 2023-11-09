// 매일코테 #백준 #Javascript #클래스02 #소수구하기

// 타이틀: 1929 소수구하기
// # 문제: M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

/* 
입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
*/

// 입력 예시
/* 
3 16
*/

// 출력 예시
/* 
3
5
7
11
13
*/

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(" ");

const [n, m] = input.map(v => Number(v));
const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    if (prime[i]) {
       continue;
    }
 
    for (let j = i ** 2; j <= m; j += i) {      
       prime[j] = true;
    }
}

const answer = [];

for (let i = n; i <= m; i++) {
   if (!prime[i]) {
        answer.push(i);
   }
}

console.log(answer.join("\n"))