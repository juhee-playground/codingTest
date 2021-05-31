function solution(numbers, hand) {
  var answer = '';
  let keyPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  let direction = ["B", "L", "B", "R", "L", "B", "R", "L", "B", "R"];
  let curLPosition = "*";
  let curRPosition = "#";
  let numsPosition = {};
  
  // 각각의 키패드 위치 구하기
  for(let row = 0; row < 4; row++) {
      for(let col = 0; col < 3; col++) {
          let index = row * 3 + col;
          numsPosition[keyPad[index]] = { row: row, col: col};
      }
  }
  
  for(let i = 0; i < numbers.length; i++) {
      let index = numbers[i];
      // 키패드의 위치가 어느 방향인지 확인 후 가운데가 아닐 경우 바로 누르기
      if(direction[index] === "L") {
          curLPosition = index;    
          answer += direction[index];
      }else if(direction[index] === "R") {
          curRPosition = index;
          answer += direction[index];
      }
   
      if(direction[index] === "B") {
          let currentHand = hand.charAt(0).toUpperCase();
          // 가운데 번호 일 때 현재 left, right 손가락의 위치를 비교한다.
          // 거리구하기
          let leftLength = findDistance(numsPosition[index], numsPosition[curLPosition]);
          let rightLength = findDistance(numsPosition[index], numsPosition[curRPosition]);
          // 두개의 거리가 같으면 주 손(hand)으로 추가
          if(leftLength !== rightLength) {
              currentHand = leftLength < rightLength ? "L" : "R";
          }
          
          // 현재 눌린 손의 위치에 따라 현재 손위치 새로 저장
          if(currentHand === "L") {
              curLPosition = index;
          }else {
               curRPosition = index; 
          }
          answer += currentHand;
      }
  }
  return answer;
}

function findDistance(next, cur) {
  let rowLen = next.row - cur.row;
  let colLen = next.col - cur.col;
  return Math.abs(rowLen) + Math.abs(colLen);
}