//FIXME: 작업해야함. 이거는 대충 쓴거임.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function(line) {
  const input = line.split(' ');
  // 입력 받을 값 한 개 입력하기
	// input.push(line);
	console.log(line);

  rl.close();
}).on("close", function factorial() {
  // 함수 구하기
  

  process.exit();
});