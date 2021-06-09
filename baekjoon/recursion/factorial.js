// #백준 #재귀 #팩토리얼 #10872
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let output = 0;

rl.on('line', function(line) {
	input.push(line);
	if(input.length === 1) {
		 rl.close();
	}
}).on("close", function() {
  // 함수 작성란
  output = factorial(input[0]);
  console.log(output);
  process.exit();
});

function factorial(n) {
  if(n <= 1) {
    return 1;
  }
  return n * factorial(n-1);
}