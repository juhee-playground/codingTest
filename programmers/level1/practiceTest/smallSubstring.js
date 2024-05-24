function solution(t, p) {
  var answer = 0;
  const pLength = p.length;
  const length = t.length - pLength;
  for(let i = 0; i <= length; i++) {
      const value = t.slice(i, pLength+i);
      if(parseInt(value) <= parseInt(p)) {
          answer++;
      }
  }
  return answer;
}