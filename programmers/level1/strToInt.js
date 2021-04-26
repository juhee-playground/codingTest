// 내가 푼 딥
function solution(s) {
  var answer = 0;
  let charIndex = 0;
  let isSign = false;
  let strLength = s.length;

  let firstChar = Number(s.charAt(0));

  if(isNaN(Number(firstChar))) {
      isSign = true;
      charIndex = 1;
  }else {
      charIndex = 0;
  }

  for(let i = charIndex; i < strLength; i++) {
      let changeNumber = Number(s.charAt(i));

      if(isSign && s.charAt(0) === "-") {
          answer -= changeNumber * Math.pow(10, strLength - (i+1));
      }else {
          answer += changeNumber * Math.pow(10, strLength - (i+1));
      }
  }
  return answer;
}

// 사람들이 푼 답
var strToInt = parseInt;

console.log(strToInt("-1234"));