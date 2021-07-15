// #알고리즘뿌시기 #아침코테 #백준 #기본수학1 #벌집

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = 0;
let inputCount = 0;
let count = 0;

rl.on('line', function(line) {
  number = line;

  inputCount++;
  if(inputCount === 1) {
    rl.close();
  }

}).on("close", function findNumber() {
  while(number > 0) {
    let x = count === 0 ? 1 : count * 6;
    number -= x;
    // console.log(x, number, count);
    count++;
  }
  
  console.log(count);
  process.exit();
});
