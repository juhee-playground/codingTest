// #알고리즘뿌시기 #아침코테 #백준 #기본수학2 #소수찾기
// 입력값 줄에 여러 개

// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

// 예제 입력 1 
// 4
// 1 3 5 7


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let countInput = 0;
let count = 0;

rl.on('line', function(line) {
  if(countInput === 0) {
    countInput = line;
  }else {
    input.push(line.split(' ').map((v) => parseInt(v)));
    count++;
    console.log(input);

    if(count === countInput) {
      rl.close();
    }
  }

 
}).on("close", function findNumber() {
  // 함수구하기
  
});
