function solution(n) {
  var answer = '';
  let numbers = [1, 2, 4];

  let mok = n / 3;
  let namugi = n % 3;
  console.log(namugi, mok);

  if(mok === 0) {
    answer = mok;
    continue;
  }
  if(namugi === 0) {
    answer = String((n / 3)- 1).replace(0, 4);
  }

  
  return answer;
}