function solution(cards1, cards2, goal) {
  var answer = 'Yes';
  let order1 = 0;
  let order2 = 0;
  for(let i = 0; i < goal.length; i++) {
      // cards1에서 먼저 확인
      if(goal[i] === cards1[order1]) {
          order1++;
          continue;
      }else if(goal[i] === cards2[order2]){
          order2++;
          continue;
      }else {
          answer = "No";
          return answer;
      }
  }
  
  return answer;
}