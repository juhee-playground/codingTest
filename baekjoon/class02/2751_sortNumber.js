// 아침코테 #백준 #JavaScript #클래스2 #수정렬하기2

// 타이틀: 2761 수 정렬하기 2
// 문제: N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

/*
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

출력
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
*/

/*
입력 예시
5
5
4
3
2
1

출력 예시
1
2
3
4
5
*/

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const [n, ...arr] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const numbers = arr.map(char => Number(char));
const result = numbers.sort(function(a, b) {
    return a - b;
});

console.log(result.join('\n'));