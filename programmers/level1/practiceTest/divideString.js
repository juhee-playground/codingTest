function solution(s) {
  var answer = 0;
  let [same, notSame] = [0, 0];
  let pointer = 0;
  let char = s[pointer];
  let copy = s;

  while(pointer <= s.length) {
      if(char === s[pointer]) {
          same++;
      }else {
          notSame++;
      }
      // 두 수의 크기가 같으면 문자열을 자른다.
      if(same === notSame) {
          copy = s.substring(pointer+1);
          same = 0;
          notSame = 0;
          char = copy[0];
          answer++;
      }
      
      if(copy !== '' && pointer === s.length) {
          answer++;
      }
      // pointer 옆으로 한칸 옮긴다.
      pointer++;
  }
  return answer === 0 ? 1 : answer;
}