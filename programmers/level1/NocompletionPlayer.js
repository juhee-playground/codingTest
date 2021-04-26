function solution(participant, completion) {
  var answer = '';
  let completionObj = {};

  participant.forEach((player, index) => {
      
      if (completionObj[player]){
          completionObj[player] += 1
      }else{
          completionObj[player] = 1
      }
  });
    completion.forEach(player => {
        completionObj[player] -= 1
    });
    Object.keys(completionObj).forEach(player => {
        
        if (completionObj[player] !== 0){
            answer = player
            return answer;
        }
            
    })

return answer;
}