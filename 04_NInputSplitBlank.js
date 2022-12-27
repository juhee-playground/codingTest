// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const [n, ...arr] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/);