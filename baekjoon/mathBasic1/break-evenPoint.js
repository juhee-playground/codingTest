// #알고리즘뿌시기 #아침코테 #백준 #기본수학1 

// A(fixedCost): 고정비, B(variableCost): 가변비용, C(price): 물건 가격
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = "";
let fixedCost = 0;
let variableCost = 0;
let price = 0;
let count = 0;
let amount = 0;

rl.on('line', function(line) {
  input += line + " ";

  count++;
  if(count === 1) {
    rl.close();
  }

}).on("close", function findNumber() {
  let data = input.split(" ");
  // 함수 구하기
  fixedCost = parseInt(data[0]);
  variableCost = parseInt(data[1]);
  price = parseInt(data[2]);

  let restCost = price - variableCost;

  if(restCost <= 0) {
    amount = -1;
  }else {
    amount = Number.isInteger(fixedCost / restCost) ? fixedCost / restCost + 1 : Math.ceil(fixedCost / restCost);
  }
  console.log(amount);
  process.exit();
});
