function solution(name, yearning, photo) {
  var answer = [];
  for(let i = 0; i < photo.length; i++) {
      answer[i] = 0;
      for(let j = 0; j < photo[i].length; j++) {
          const person = photo[i][j];
          if(name.indexOf(person) > -1) {
              answer[i] = answer[i] + yearning[name.indexOf(person)];
          }
      }
  }
  return answer;
}