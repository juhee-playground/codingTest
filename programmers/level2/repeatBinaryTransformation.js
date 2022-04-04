// #아침코테 #level2 #월간코드챌린지 #이진변환반복하기
function solution(s) {
  var answer = [];
  let changeCount = 0;
  let zeroCount = 0;
  
  while(s.length > 1) {
      let removeZero = s.replace(/[0]/g,"");
      zeroCount += s.length - removeZero.length;
      s = removeZero.length.toString(2);
      changeCount++;
  }
  
  answer.push(changeCount, zeroCount);
  return answer;
}