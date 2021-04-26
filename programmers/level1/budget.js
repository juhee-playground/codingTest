function solution(d, budget) {
  var answer = 0;

  d.sort(function(a, b) {
      return a - b;
  });

  for(let i = 0; i < d.length; i++) {
      if(budget >= d[i]) {
          budget = budget - d[i];
          answer++;
          continue;
      }
  }

  return answer;
}