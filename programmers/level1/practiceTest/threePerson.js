function solution(number) {
  var answer = 0;
  number.sort((a, b) => a - b);
  
  for(let i = 0; i < number.length - 2; i++) {
      let p1 = i + 1;
      let p2 = number.length-1;
      while(p1 < p2) {
          if(number[i] + number[p1] + number[p2] === 0) {
              answer++;
          }
          p1++;
          if(p1 === p2) {
              p2--;
              p1 = i+1;
          }
      }
  }
  
  return answer;
}