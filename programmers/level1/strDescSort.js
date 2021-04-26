function solution(s) {
  var answer = '';
  let lowerArr = [];
  let upperArr = [];
  for(let i = 0; i < s.length; i++) {
      let lowerChar = s.charAt(i).toLowerCase();
      if(s.charAt(i) === lowerChar) {
          // 소문자
          lowerArr.push(s.charAt(i));
      }else {
          // 대문자
          upperArr.push(s.charAt(i));
      }
      
  }
  
  lowerArr.sort(function(a, b)  {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
  });
  
  
  upperArr.sort(function(a, b)  {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
  });
  
  for(let i = 0; i < lowerArr.length; i++) {
      answer += lowerArr[i];
  }
  
  for(let i = 0; i < upperArr.length; i++) {
      answer += upperArr[i];
  }
  return answer;
}