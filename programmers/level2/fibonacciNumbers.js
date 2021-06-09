function solution(n) {
  var answer = 0;
  let fibo = [0, 1];
  if(n === 1) {
   answer = fibo[1] % 1234567;; 
  }else {
      for(let i = 2; i <= n; i++) {
          let curfibo = fibo[i-2] % 1234567 + fibo[i-1] % 1234567;
          fibo.push(curfibo);
      }
      let fiboLen = fibo.length - 1;
      answer = fibo[fiboLen] % 1234567;
  }
  return answer;
}