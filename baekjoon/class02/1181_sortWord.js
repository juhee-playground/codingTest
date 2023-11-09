// 매일코테 #백준 #Javascript #클래스2 #단어정렬

// 타이틀: 1191 단어정렬
// # 문제: 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

/* 

1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로

입력
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 
둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 
주어지는 문자열의 길이는 50을 넘지 않는다.

출력
조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
*/

// 입력 예시
/* 
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours 
*/

// 출력 예시
/* 
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate
*/

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const [n, ...arr] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 길이 순으로 정렬
const answer = [...new Set(arr)].sort(function(a, b) {
    if (a.length > b.length) return 1;
    if (a.length === b.length) {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    };
    if (a.length < b.length) return -1;
});;

console.log(answer.join('\n'));