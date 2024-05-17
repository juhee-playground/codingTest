function solution(n) {
  let answer = 2;
  for(let i = 2; i < n; i++) {
     if((n-1) % i === 0) {
         return i;
     }
  }
  return answer;
}