function solution(a, b) {
  var answer = 0;
  a.map((number, index) => answer += number*b[index]);
  return answer;
}