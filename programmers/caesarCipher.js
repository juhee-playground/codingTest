function solution(s, n) {
  var answer = "";
  let ascii = "";
  for(let i = 0; i < s.length; i++) {
      // 문자가 공백이면 패스
      if(s[i] === " ") {
          answer += " ";
      } else {
          // 문자가 z, Z이면 -26 해주기
          ascii = s.charCodeAt(i);
          if(ascii === 90 || ascii === 122) {
              ascii = ascii - 26;
          }
          console.log(ascii, n, " = ", ascii + n);
          ascii = ascii + n;
          answer += String.fromCharCode(ascii);
      }
  }
  return answer;
}