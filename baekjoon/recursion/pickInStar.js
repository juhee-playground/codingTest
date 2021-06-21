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
  let num = input[0];
  let count = 0;
  // 함수 작성란
  if(num < 1) {
    console.log(output);
    return output += "*"; 
  }
  output = pickStar(num, count);
  console.log(output);

  process.exit();
});

function pickStar(num, count) {
  if(num < 1) {
    return "*"
  }
  count = count++;
  return pickStar(num, count);
}
