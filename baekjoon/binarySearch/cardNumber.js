
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
  // console.log("arr",haveCardArr);

  for(let i = 0; i < compareArr.length; i++) {
    let search = [];
    let startIndex = 0;
    let endIndex = haveCardLen;
    while(startIndex <= endIndex) {
      output[i] = 0;
      let midIndex = parseInt((startIndex + endIndex) / 2);
      if(haveCardArr[midIndex] > compareArr[i]) {
        endIndex = midIndex - 1;
        search = haveCardArr.slice(startIndex, endIndex+1);
      }else if(haveCardArr[midIndex] < compareArr[i]){
        startIndex = midIndex + 1;
        search = haveCardArr.slice(startIndex, endIndex+1);
      }else {
        endIndex = midIndex - 1;
        startIndex = midIndex + 1;
        let lowerBound = endIndex;
        let upperBound = startIndex;
        
        let count = upperBound - lowerBound + 1;
        
        // console.log("before search", search, compareArr[i]);
        // if(haveCardArr[startIndex] === haveCardArr[midIndex-1] && haveCardArr[midIndex-1] === haveCardArr[endIndex-1] ) {
        //   console.log("그대로");
        //   break;
        // }else if(haveCardArr[startIndex] < compareArr[i]){
        //   let index = search.indexOf(compareArr[i])
        //   search = search.slice(index, search.length);
        // }else {
        //   search = search.reverse();
        //   let index = search.indexOf(compareArr[i])
        //   search = search.slice(index, search.length);
        // }
        // search = search.filter(card => card === compareArr[i]);
        output.push(count);
        break;
      }
    }
  }
  console.log(output.join(" "));
  
  process.exit();
});