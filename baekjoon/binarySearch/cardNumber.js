
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
  findNumberArrLen = input[2][0];
  findNumberArr = input[3].slice(0, Number(findNumberArrLen));
  // 먼저 정렬해주기
  haveCardArr.sort((a, b) => a - b);
  console.log("have card", haveCardArr);
  console.log("find", findNumberArrLen);
  let startIndex = 0;
  let endIndex = haveCardLen-1;
  let midIndex = 0;
  for(let i = 0; i < findNumberArrLen; i++) {
    startIndex = findMinBound(haveCardArr, findNumberArr[i]);
    endIndex = findMaxBound(haveCardArr, findNumberArr[i]);
  }
  
  console.log(endIndex - startIndex);
  process.exit();
});

function findMaxBound(arr, findNumber) {
  let startIndex = 0;
  let endIndex = arr.length-1;
  let midIndex = 0;
  for(let i = 0; i < arr.length; i++)  {
    midIndex = Math.ceil(startIndex + endIndex / 2);
    console.log(startIndex, endIndex, midIndex);
    // midIndex 값이 찾는 값 보다 작을 경우 앞에 버리기
    if(arr[midIndex] > findNumber) {
      startIndex = midIndex + 1;
    }else if(arr[midIndex] > findNumber) {
      // midIndex 값이 찾는 값 보다 클 경우 뒤에 버리기
      endIndex = midIndex - 1;
    }else {
      // 같을 때 mid값이 제일 첫 자리인지 파악하기
      if(arr[midIndex] === haveCardArr[startIndex]) {
        // mid가 startIndex
        startIndex = midIndex;
        return startIndex;
      }else {
        arr.slice()
      }
    }
  }
}