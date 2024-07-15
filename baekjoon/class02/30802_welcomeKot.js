const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  // 입력되는 문자열의 공백을 string.trim() 처리하여 제거합니다.
  input.push(line.trim());
  // 문제에서 들어오는 입력이 2줄이기 때문에 input의 길이가 2면 입력을 종료시켜요.
  if (input.length == 3) {
    const N = parseInt(input[0], 10);
    const sizes = input[1].split(" ").map(Number);
    const [T, P] = input[2].split(" ").map(Number);

    // 티셔츠 묶음 수 계산
    let totalTShirtBundles = 0;
    for (let size of sizes) {
      totalTShirtBundles += Math.ceil(size / T);
    }

    // 펜 묶음 수 계산
    const penBundles = Math.floor(N / P);
    const pensLeft = N % P;

    // 결과 출력
    console.log(totalTShirtBundles);
    console.log(`${penBundles} ${pensLeft}`);
  }
});
