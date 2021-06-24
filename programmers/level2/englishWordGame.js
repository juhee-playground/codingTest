function solution(n, words) {
  let answer = [];
  let lastChar = "";
  let firstChar = "";
  let wrongPlayer = 0;
  let count = 0;
  let wordCheck = {};
  
  answer.push(wrongPlayer);
  answer.push(count);
  
  for(let i = 0; i < words.length; i++) {
      // 1번 차례가 돌아오는 횟수
      if(i % n === 0) {
          count++;   
      }
      // 했던 단어 또 말하는지 확인하기
      if(wordCheck[words[i]] !== "") {
          wordCheck[words[i]] = "";
      }else {
          wrongPlayer = Math.floor(i % n) + 1;
          answer[0] = wrongPlayer;
          answer[1] = count;
          return answer;
      }
      let lastIndex = words[i].length - 1;
      if(i > 0) {
          firstChar = words[i].charAt(0);
          if(firstChar !== lastChar) {
              wrongPlayer = Math.floor(i % n) + 1;
              answer[0] = wrongPlayer;
              answer[1] = count;
              return answer;
          } 
      }
      lastChar = words[i].charAt(lastIndex);
  }

  return answer;
}