// #알고리즘뿌시기  #기본수학1 X #아침코테 #백준 #호텔 방 배정하기
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];
let testCount = 0;

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
    let inputValue = inputs[i].split(" ");

    let hotelHeight = parseInt(inputValue[0]);
    let orderPerson = parseInt(inputValue[2]);


    let roomNumber =  Math.ceil(orderPerson / hotelHeight);
    let height = orderPerson % hotelHeight;
    roomNumber = roomNumber < 10 ? "0" + roomNumber : roomNumber;

    console.log(height + roomNumber);
  }

  process.exit();
});
