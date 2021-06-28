// #아침코테 #프로그래머스 #level2 #숫자의표현
function solution(n) {
  var answer = 0;
  let startNumber = 1;
  function sumNumber(i, sum) {
      sum += i
      if(sum < n) {
          sumNumber(i+1, sum);
      }else if(sum === n) {
          answer++;
          return;
      }   
  }

  for(let i = startNumber; i <= n; i++) {
      sumNumber(i, 0);   
  }
  return answer;
}