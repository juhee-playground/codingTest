function solution(s){
  var answer = true;
  let openBracketCount = 0;

  for(let i = 0; i < s.length; i++) {
      // 열린괄호 인지 확인 하고 열린괄호 count +1
      if(s.charAt(i) === "(") {
          openBracketCount++;
      }else {
          // 닫힌 괄호이면 열힌괄호 count -1;
          openBracketCount--;   
      }
      // 열린괄호 갯수가 -이면 false로 빠지기
      if(openBracketCount < 0) {
          answer = false;
          return answer;
      }
  }

  // 열린괄호 갯수가 0이 아니면 false
  if(openBracketCount !== 0) {
      answer = false;
  }
  return answer;
}