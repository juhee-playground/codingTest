function solution(s) {
  var answer = '';
  const wordArray = s.split('');
  let index = 0;
  wordArray.map(word => {
      answer += index % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
      index++;
      if(word === " ") {
          index = 0;
      }
  });
return answer;
}