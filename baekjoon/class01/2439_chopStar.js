// 매일코테 #백준 #Javascript #클래스01 #별찍기2

// 타이틀: 2439 별찍기2
// # 문제: 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
//         하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

/* 
입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/

// 입력 예시
/* 
5
*/

// 출력 예시
/* 
    *
   **
  ***
 ****
*****
*/

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

for(let star = 1; star <= input; star++) {
    const blank = input - star;
    console.log(" ".repeat(blank) + "*".repeat(star));
}