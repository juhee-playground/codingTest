//FIXME: 작업해야함. 이거는 대충 쓴거임.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function(line) {
  input.push(line.split(' ').map((v) => parseInt(v)));
  // 입력 받을 갯수 구해서 count 맞춰서 끊어주기
  count++;
  if(count === X) {
    rl.close();
  }
}).on("close", function factorial() {
  // 함수 구하기
  

  process.exit();
});