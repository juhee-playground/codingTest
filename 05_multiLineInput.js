// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const [n, ...arr] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
