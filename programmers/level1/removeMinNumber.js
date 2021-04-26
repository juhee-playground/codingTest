function solution(arr) {
  var answer = [];
  let minNumber = Math.min.apply(null, arr);
  let removeIndex = arr.indexOf(minNumber);
  arr.splice(removeIndex, 1);
  answer = arr.length !== 0 ? arr : [-1];
  return answer;
}