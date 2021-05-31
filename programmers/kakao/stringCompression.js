function solution(numbers) {
  var answer = 0;
  // 받은 numbers를 분해한다.
  let pieceNumbers = numbers.split("");
  let numberList = [];
  let dupArr = [];
  // 분핸한 숫자 조각으로 만들 수 있는 숫자를 배열에 담는다.
  for(let i = 1; i <= pieceNumbers.length; i++) {
      const result = combination(pieceNumbers, i);
      numberList.push(...result);
  }
  // 배열에 있는 숫자 중 소수의 개수를 구한다.
  for(let i = 0; i < numberList.length; i++) {
      let num = (numberList[i].join(""));
      dupArr.push(Number(num));
  }

  const set = new Set(dupArr);
  const uniqueArr = [...set];

  // 배열에 있는 숫자 중 소수의 개수를 구한다.
  for(let i = 0; i < uniqueArr.length; i++) {
      // console.log(uniqueArr[i]);
      if(isPrimeNumber(uniqueArr[i])) {
          answer++;
      }
  }

  return answer;
}

function combination(arr, num) {
let result = [];
if(num === 1) return arr.map(e => [Number(e)]);

arr.forEach((e,i,array) => {
  let rest = [...array.slice(0,i), ...array.slice(i+1)];
  let combinations = combination(rest,num-1);
  let combiArr = combinations.map(x => [Number(e), ...x]);
  result.push(...combiArr);
}) 
return result;
}

function isPrimeNumber(n) {
  if(n < 2) {
      return false;
  }

  for(let i=2; i<=n/2; i++){
      if(n % i === 0){
          return false;
      }        
  }

  return true;
}