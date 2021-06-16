function solution(info, query) {
  var answer = [];
  // info 정리 
  let information = [];
  info.forEach(i => {
      let word = i.split(" ");
      information.push({
          lan: word[0],
          type: word[1],
          career: word[2],
          food: word[3],
          score: word[4]
      });
  });
  
  // query 정리
  let querys = [];
  query.forEach(i => {
      let condition = i.split(" ");
      const count = filtering(information, condition);
      answer.push(count);
  });
  return answer;
}

function filtering(information, condition) {
  const res = information.filter(info => 
      (condition[0] === "-" || info.lan === condition[0]) && 
      (condition[2] === "-" || info.type === condition[2]) &&
      (condition[4] === "-" || info.career === condition[4]) &&
      (condition[6] === "-" || info.food === condition[6]) &&
      (condition[7] === "-" || info.score >= Number(condition[7]))
  );
  return res.length;
}