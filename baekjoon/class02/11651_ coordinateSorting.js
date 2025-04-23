// 아침코테 #백준 #JavaScript #클래스2 #좌표정렬하기
// https://www.acmicpc.net/problem/11651
const filePath =
  process.platform === "linux"
    ? "dev/stdin"
    : "../../input.txt";
const fs = require("fs");
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

arr.sort((a, b) => {
  const [a1, a2] = a.split(" ");
  const [b1, b2] = b.split(" ");
  if (a2 === b2) {
    return a1 - b1;
  }
  return a2 - b2;
});

for (let i = 0; i < n; i++) {
  const [a, b] = arr[i].split(" ");
  console.log(a, b);
}
