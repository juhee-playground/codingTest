function solution(num, total) {
  var answer = [];
  const value = total / num;
  const startNumber = Math.ceil(value - num / 2);
  for(let i = startNumber; i < startNumber + num; i++) {
      answer.push(i);
  }
  
  console.log(answer);
  return answer;
}