// #알고리즘뿌시기 #아침코테 #백준 #기본수학1 #설탕 배달
// 입력값 줄에 딱 한개

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = 0;
let inputCount = 0;

rl.on('line', function(line) {
  number = line;

  inputCount++;
  if(inputCount === 1) {
    rl.close();
  }

}).on("close", function findNumber() {
  let minDeliveryNumber = -1;
  // 5를 5의 배수만큼 증가시킨다.
  // number의 값을 넘지 않도록
  for(let i = 0; i <= number / 5; i++) {
    // 나머지 = number - 5g * 가져간 수 
    const rest = number - (5 * i);

    // 나머지를 3으로 나눈다. 나누어질때만 계산
    if(rest % 3 === 0) {
      const value = rest / 3;
      minDeliveryNumber = minDeliveryNumber > -1 && minDeliveryNumber < i + value ? minDeliveryNumber : i + value;
    }
  }
 
  console.log(minDeliveryNumber);
  process.exit();
});