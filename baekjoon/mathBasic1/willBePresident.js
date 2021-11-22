// #알고리즘뿌시기 #아침코테 #백준 #기본수학1 #부녀회장이 될테야
// 입력값 줄에 여러 개
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];
let testCount = 0;

rl.on('line', function(line) {
  if(testCount === 0) {
    testCount = Number(line);
  }else {
    inputs.push(line);
    lineCount++;
  }
 
  if(inputs.length === testCount) {
    rl.close();
  }

}).on("close", function findNumber() {

  process.exit();
});
