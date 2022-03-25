// #아침코테 #알고리즘뿌시기 #백준 #기본수학1 #날아라AlphaCentaurl

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];
let testCount = 0;
let lineCount = 0;

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
  for(let i = 0; i < testCount; i++) {
    let count = 2;
    let inputValue = inputs[i].split(" ");

     const startPoint = inputValue[0];
     const endPoint = inputValue[1];
     let distance = endPoint - startPoint;

     distance = distance - 2;

     while(distance > 0) {
      if(distance <= 2) {
        distance = distance - 2;
      }else if(distance <= 1) {
        distance = distance - 1;
      }
      count++;
     }
     console.log(count);
  }
  process.exit();
});

/* 3
0 3
1 5
45 50 */