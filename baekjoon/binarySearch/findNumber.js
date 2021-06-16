//FIXME: 작업해야함. 이거는 대충 쓴거임.

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
}).on("close", function factorial() {
  // 함수 구하기
  numberArrLen = input[0][0];
  numberArr = input[1].slice(0, Number(numberArrLen));
  compareArrLen = input[2][0];
  compareArr = input[3].slice(0, Number(compareArrLen));
  // console.log(numberArrLen, numberArr, compareArrLen, compareArr);
  // 먼저 정렬해주기
  numberArr.sort((a, b) => a - b);

  for(let i = 0; i < compareArr.length; i++) {
    let left = 0;
    let right = numberArr.length - 1;
    // console.log("찾을값", compareArr[i]);
    while(left <= right) {
      output[i] = 0;
      let mid = parseInt((left + right) / 2);
      // 구하고자 하는 값 = compareArr[i]
      // console.log("compare", numberArr[mid], compareArr[i]);
      if(numberArr[mid] > compareArr[i]) {
        right = mid - 1;
      }else if(numberArr[mid] < compareArr[i]){
        left = mid + 1;
      }else {
        // console.log("findIt");
        output[i] = 1;
        break;
      }
    }
    console.log(output[i]);
  }
  
  process.exit();
});