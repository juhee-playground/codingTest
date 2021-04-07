// a,b 를 서로를 나눈다. 만약 나누어진다면 b가 최대공약수이다.(a > b이다.)
// 만약 서로가 나누어지지 않는다면 b와 a % b(a를 b로 나눈 나머지) 다시 나눈다.
// 서로가 나누어진다면 a % b가 최대공약수이다. 만약 나누어지지 않는다면 다시 위 방법을 반복한다.

function solution(n, m) {
  var answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);
  answer[0] = findGcd(minNum, maxNum);
  answer[1] = findLcm(minNum, maxNum);
  return answer;
}

function findGcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 ? maxNum : findGcd(maxNum, minNum % maxNum);
}

function findLcm(minNum, maxNum){
return minNum * maxNum / findGcd(minNum, maxNum);
}