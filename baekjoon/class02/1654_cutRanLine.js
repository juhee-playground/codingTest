// 아침코테부활 #백준 #JavaScript #클래스2 #랜선 자르기 #이분탐색 #매개변수탐색
// https://velog.io/@otterp/%EB%B0%B1%EC%A4%80-1654-%EB%9E%9C%EC%84%A0-%EC%9E%90%EB%A5%B4%EA%B8%B0-javascript 봄
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [K, N] = input.shift().split(" ");
const lines = input.map(Number).sort((a,b) => a-b);
const target = +N;

let left = 0;
let right = lines[lines.length-1];

let answer = 0;
while(left <= right) {
    let mid = Math.floor( (left + right)/2 );
    let lineNum = lines.reduce((acc, cur) => acc + Math.floor(cur/mid), 0);
    //  mid값에 따라서 구해지는 랜선의 갯수.
    
    if(lineNum >= target) {
        // 구해지는 랜선의 개수가 target보다 같거나 많은 경우
        if(mid > answer) answer = mid;
        // mid값 중 최댓값을 구할 것이기 때문에 추가한 로직.

        left = mid + 1;
        // 구해지는 랜선의 길이를 낮게해야함 -> 랜선을 나누는 길이를 높여줘야함. -> left를 증가시켜 줘야 함.
    } else {
        right = mid - 1;
    }
}

console.log(answer);