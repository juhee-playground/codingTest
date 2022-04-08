// #알고리즘뿌시기  #기본수학1 X #아침코테 #백준 #호텔 방 배정하기
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
    let inputValue = inputs[i].split(" ");

    let hotelHeight = parseInt(inputValue[0]);
    let hotelWidth = parseInt(inputValue[1]);
    let orderPerson = parseInt(inputValue[2]);
    let basicCondition = hotelHeight >= 1 && hotelHeight <= 99 && hotelWidth >=1 && hotelWidth <=99;

    if(basicCondition && orderPerson >= 1 && orderPerson <= hotelHeight * hotelWidth) {
      let roomNumber =  Math.ceil(orderPerson / hotelHeight);
      let height = orderPerson % hotelHeight === 0 ? hotelHeight : orderPerson % hotelHeight;
      
      roomNumber = roomNumber < 10 ? "0" + roomNumber : roomNumber;
      console.log(`${height}${roomNumber}`);
    }
  }

  process.exit();
});
