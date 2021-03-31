function solution(x, n) {
  var answer = [];
  let count = 1;
  let addNumber = x;
  while(count <= n) {
      answer.push(x);
      x += addNumber;
      count++;
  }
  return answer;
}