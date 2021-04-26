function solution(n) {
  var answer = 0;
  let changeToThree = n.toString(3);
  let reverseThree = String(changeToThree).split('').reverse();
  answer = Number.parseInt(reverseThree.join(''), 3);
  return answer;
}