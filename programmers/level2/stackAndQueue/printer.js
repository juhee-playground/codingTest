// #아침코테 #level2 #스택.큐 #프린터
function solution(priorities, location) {
  let printerStack = [];
  console.log(location);
  let findFirstIndex = location;
  // 다 빠져나갔을때 끝
  while(priorities.length > 0) {
      // index = 0, index 배열의 길이 - 1

      let printItem = priorities[0];
      priorities.shift();

      let maxNumber = Math.max(...priorities);
      if(printItem < maxNumber) {
          // 지금 있는 걸 맨 뒤로 보내기
          priorities.push(printItem);
      }
      else {
           // 맨 앞에 추가 // 빠지기
          printerStack.push(printItem);
      }
      
      // 맨 앞을 구하는 
      if(findFirstIndex !== 0) {
          // index = 0 이 아닐 때 index - 1
          findFirstIndex--;
      }else if(findFirstIndex === 0 && printItem < maxNumber) {
          // index = 0 이고 나미자 값중에 클 때 index = 배열의 길이 - 1
          findFirstIndex = priorities.length - 1;
      }else if(findFirstIndex === 0 && printItem >= maxNumber) {
          // index = 0 이고 나미자 값들이 다 작을 때 끝
          console.log("end", printItem,  printerStack.length);
          return printerStack.length;
      }
  }
}