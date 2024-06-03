function solution(food) {
  let onePlayer = '';
  for(let i = 1; i < food.length; i++) {
      let foodPerPerson = Math.floor(food[i]/2);
      if(foodPerPerson === 0) {
          continue;
      }else {
          onePlayer += i.toString().repeat(foodPerPerson);
      }
  }
  let twoPlayer = onePlayer.split("").reverse().join("");
  answer = `${onePlayer}0${twoPlayer}`;
  return answer;
}