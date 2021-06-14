function solution(dartResult) {
  var answer = 0;
  let dartScoreBoard = {
    1: { score: 0, bonus: "", options: "", sum: 0 },
    2: { score: 0, bonus: "", options: "", sum: 0 },
    3: { score: 0, bonus: "", options: "", sum: 0 },
  };
  let count = 1;
  let score = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let bonusEnum = ["S", "D", "T"];
  let optionsEnum = ["*", "#"];

  for(let i = 0; i < dartResult.length; i++) {
    // 숫자인지, 문자인지 뭔지? 파악하기
    let char = dartResult.charAt(i);
    if(score.includes(char)) {
      // 문자가 숫자인지?
      dartScoreBoard[count].score = char;
      // 다음 문자가 숫자인지 확인하기
      if(i < dartResult.length - 1) {
        if(score.includes(dartResult.charAt(i+1))) {
          dartScoreBoard[count].score = dartResult.charAt(i) + dartResult.charAt(i + 1);
            i++;
            continue;
        }
      }
    }else if(bonusEnum.includes(char)) {
      // 문자가 보너스를 확인할 수 있는 건지?
      dartScoreBoard[count].bonus = char;
      if(i < dartResult.length - 1) {
        if(score.includes(dartResult.charAt(i+1))) {
          count++;
        }
      }
    }else if(optionsEnum.includes(char)) {
         // 문자가 옵션을 확인할 수 있는 건지?
      dartScoreBoard[count].options = char;
      count++;
    }
  }
  // console.log("board", dartScoreBoard);
  /*
      Single(S) - 1제곱, Double(D) - 2제곱, Triple(T) - 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
      스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
      아차상(#) 당첨 시 해당 점수는 마이너스된다.
      스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다.
      스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다.
      스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다.
      Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
      스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
  */
      let totalScore = 0;
      Object.keys(dartScoreBoard).forEach((key, index) => {
        let element = dartScoreBoard[key];
        let score = MathPow(element.score, element.bouns);
        if(element.options === "#") {
          element.sum = - score;
        }else if(element.options === "*") {
          if(index > 0) {
            dartScoreBoard[index-1].sum = dartScoreBoard[index-1].score * 2;
          }
          element.sum = score * 2;
        }else {
          element.sum = score;
        }
      });
  
      console.log(dartScoreBoard);
  return answer;
}

function MathPow(num, bonus) {
  switch(bonus) {
    case "D":
      pow = 2;
      break;
    case "T":
      pow = 3;
      break;
    default: 
      pow = 1;
      break;
  }
  return Math.pow(num, pow);
}