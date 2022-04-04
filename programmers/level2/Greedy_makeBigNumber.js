// #아침코테 #level2 #탐욕법 #스택 #큰 수 만들기
function solution(number, k) {
    let answer = "";
    let stackArr = [];
    for(let i = 0; i < number.length; i++) {
      let num = number[i];
      console.log(k, stackArr, stackArr[stackArr.length-1])
      while(k > 0 && stackArr[stackArr.length-1] < num) {
        stackArr.pop();
        k--;
      }
      stackArr.push(num);
    }
    stackArr.splice(stackArr.length - k , k);
    answer = stackArr.join("");
  
    return answer;
}