function solution(k, m, score) {
  let answer = 0;
  let temp = score.sort((a,b) => (b - a));
  for(let i = m; i <= temp.length; i = i + m) {
      answer += temp[i - 1] * m;
  }
  return answer;
}