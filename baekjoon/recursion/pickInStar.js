// #백준 #재귀 #별 찍기 - 10

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
  


  console.log(output);
  process.exit();
});
