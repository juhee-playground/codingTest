function solution(a, b, n) {
  var answer = 0;
  let emptyBottle = n;
  while(emptyBottle >= a) {
      let value = Math.floor(emptyBottle / a);
      let rest = emptyBottle % a;
      answer += b*value;
      emptyBottle = rest + b*value;
  }
  return answer;
}