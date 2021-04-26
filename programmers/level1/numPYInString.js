function solution(s){
  var answer = true;
  s = s.toLowerCase();
  let arrayP = s.match(/p/g);
  let arrayY = s.match(/y/g);

  let charOfPCount = arrayP !== null ? arrayP.length: 0;
  let charOfYCount = arrayY !== null ? arrayY.length: 0;

  answer = charOfPCount === charOfYCount ? true : false;

  return answer;
}


// 한 줄 코딩
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}