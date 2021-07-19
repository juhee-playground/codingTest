// #아침코테 #level2 #해시 #위장
function solution(clothes) {
  let answer = 1;
  let count = 0;
  let clothesBook = {};
  for(let i = 0; i < clothes.length; i++) {
      let type = clothes[i][1];
      let cloth = clothes[i][0];

      if(clothesBook[type] === undefined) {
          clothesBook[type] = {};
          clothesBook[type]["array"] = [];
          clothesBook[type]["len"] = 0;
      }
      clothesBook[type]["len"]++;
      clothesBook[type]["array"].push(cloth);
  }

  let keyList = Object.keys(clothesBook);
  keyList.forEach(key => {
      answer = answer * (clothesBook[key]["len"] + 1);
  });
  answer = answer - 1;
  return answer;
}