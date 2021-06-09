// 피보나치의 수
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
  if(num < 1) {
    console.log(output);
    return output = 0; 
  }
  output = F(num);
  console.log(output);
  process.exit();
});

function F(n) {
  if(n == 1 || n == 2) {
    return 1;
  }
  return F(n-1) + F(n-2);
}