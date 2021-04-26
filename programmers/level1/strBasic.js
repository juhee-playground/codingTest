function solution(s) {
  var answer = true;
  // 문자열 한개씩 검사한다 숫자인지 아닌지
  const stringLength = s.length;
  if(s.length === 4 || s.length === 6) {
      for(let i = 0; i < stringLength; i++) {
          let chartater = s.charAt(i);
          if(isNaN(chartater)) {
              // 문자가 있으면 false
              answer = false;
              return answer;
          }else {
              // 숫자만 있으면 true
              answer = true;

          }  
      }
  
      return answer;
  }else {
       // 문자열의 길이가 4 또는 6이 아닌 경우
      answer = false;
      return answer;
  }
  
}