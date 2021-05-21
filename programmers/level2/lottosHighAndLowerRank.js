function solution(lottos, win_nums) {
  var answer = [];
  const correctNum = [];
  const wrongNum = [];
  let count = 0;
  // lottos와 win_nums를 비교한다
  for(let i = 0; i < 6; i++) {
      // 0의 갯수 구하기
      if(lottos[i] === 0) {
          count++;
      }
      // 서로 비교하기
      if(lottos.includes(win_nums[i])) {
          // 서로 같은게 몇 개인지 따로 저장한다.
          correctNum.push(win_nums[i]);
      }else {
          // 맞지 않은 번호를 따로 저장한다.
          wrongNum.push(win_nums[i]);
      }
  }
  // console.log("O", correctNum);
  // console.log("X", wrongNum, "count ", count );

  //  최저순위 파악하기 (최저 순위) 
  const lowerCorrect = correctNum.length;
   // 0의 개수로 최고순위 구하기 맞지 않은 번호의 개수에 따라 최고 순위를 구한다.
  const higherCorrect = lowerCorrect + count;
  // 개수를 순위로 구한다.
  let higherRank = (higherCorrect !== 0) ? 7 - higherCorrect : 0;
  let lowerRank = (lowerCorrect < 2) ? 6 :  7 - lowerCorrect;
  if(higherCorrect === 0 && lowerCorrect === 0) {
      higherRank = 0;
      lowerRank = 0;
  }
  
  // 최고 순위와 최저 순위를 배열에 담는다.
  answer.push(higherRank, lowerRank);

  return answer;
}