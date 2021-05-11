function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;
  let horizontal = 0;
  let vertical = 0;
  let yaksuList = [];
  for(let i = 2; i < sum; i++) {
      if(sum % i == 0) {
      yaksuList.push(i);
      }
  }

  for(let i = 0; i < yaksuList.length; i++) {
      let other = sum / yaksuList[i];
      horizontal = yaksuList[i];
      vertical = other;

      let isSame = (horizontal - 2) * (vertical -2);
      if(horizontal >= vertical && isSame === yellow) {
          answer.push(horizontal);
          answer.push(vertical);
          return answer;
      }
  }
}