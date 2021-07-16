// #아침코테 #알고리즘뿌시기 #백준 #기본수학 #달팽이는올라가고싶다
// 입력값 한줄에 여러 개

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];
let lineCount = 0;
let climbDistance = 0;
let day = 0;

rl.on('line', function(line) {
  inputs.push(line);

  lineCount++;
  if(lineCount === 1) {
    rl.close();
  }

}).on("close", function findNumber() {
  let inputValue = inputs[0].split(" ");
  
  let dayCiimbDistance = parseInt(inputValue[0]);
  let nightSlipDistance = parseInt(inputValue[1]);
  let totalTreeHeight = parseInt(inputValue[2]);

  while(climbDistance < totalTreeHeight) {
    climbDistance += dayCiimbDistance;
    day++;
    if(climbDistance >= totalTreeHeight) {
      break;
    }
    climbDistance -= nightSlipDistance;
  }
  
  console.log(day);
  process.exit();
});
