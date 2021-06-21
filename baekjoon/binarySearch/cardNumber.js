//FIXME: 작업해야함. 이거는 대충 쓴거임.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let output = [];
let haveCardLen = 0;
let haveCardArr = [];
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
  haveCardLen = input[0][0];
  haveCardArr = input[1].slice(0, Number(haveCardLen));
  compareArrLen = input[2][0];
  compareArr = input[3].slice(0, Number(compareArrLen));
  // 먼저 정렬해주기
  haveCardArr.sort((a, b) => a - b);

  for(let i = 0; i < compareArr.length; i++) {
    
    let search = [];
    let startIndex = 0;
    let endIndex = haveCardLen - 1;
    // console.log("찾을값", compareArr[i]);
    while(startIndex <= endIndex) {
      output[i] = 0;
      let midIndex = parseInt((startIndex + endIndex) / 2);
      // 구하고자 하는 값 = compareArr[i]
      console.log("index", startIndex, midIndex, endIndex);
      console.log("compare", haveCardArr[midIndex], compareArr[i]);
      if(haveCardArr[midIndex] > compareArr[i]) {
        endIndex = midIndex - 1;
        search = haveCardArr.slice(startIndex, endIndex);
      }else if(haveCardArr[midIndex] < compareArr[i]){
        startIndex = midIndex + 1;
        search = haveCardArr.slice(startIndex, endIndex);
      }else {
        if(m)
        search = haveCardArr.slice(startIndex, endIndex);
        console.log("findIt", search);
        output[i] = search.length;
        break;
      }
    }
    console.log(output.join(" "));
  }
  
  process.exit();
});