function solution(left, right) {
  var answer = 0;
  for(let i = left; i <= right; i++) {
      let divisorsCount = divisors(i);
      if(divisorsCount % 2 === 0) {
          answer += i;
      }else {
          answer -= i;
      }
  }
  return answer;
}

function divisors(integer) {
  var arr = [];
  for(var i = 1; i<= integer; i++) {
      if(integer % i === 0) {
          arr.push(i);
      }
  }
  return arr.length
}