const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let output = [];
let numberArrLen = 0;
let numberArr = [];
let compareArrLen = 0;
let compareArr = [];

let count = 0;

rl.on('line', function(line) {
  input.push(line.split(' ').map((v) => parseInt(v)));
  count++;
  if(count === 4) {
    rl.close();
  }
}).on("close", function findNumber() {
  // 함수 구하기
  console.log(input);
  numberArrLen = input[0][0];
  numberArr = input[1].slice(0, Number(numberArrLen));
  compareArrLen = input[2][0];
  compareArr = input[3].slice(0, Number(compareArrLen));

  for(let i = 0; i < compareArr.length; i++) {
    // 구하고자 하는 값 = compareArr[i]
    if(numberArr.includes(compareArr[i])) {
      output = 1;
      console.log(output);
    }else {
      output = 0;
      console.log(output);
    }
  }
  process.exit();
});