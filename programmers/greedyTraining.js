function solution(n, lost, reserve) {
  var answer = 0;
  for(let i = 1; i <= n; i++) {
      // 여벌 옷을 가져왔지만 훔쳐간 경우
      if(lost.includes(i) && reserve.includes(i)) {
          removeBorrowGymSuit(reserve, reserve.indexOf(i));
          removeBorrowGymSuit(lost, lost.indexOf(i));
      }
  }

  for(let i = 1; i <= n; i++) {
      // i가 체육복이 없는지 있는지 확인한다.
      if(!lost.includes(i)) {
          // 체육수업 들을 수 있는 사람이므로 1 추가
          answer++;
      }else {
          // 자기 앞, 뒷 번호 사람에게 체육복이 하나 더 있는지 확인한 후 1추가
          let borrowPreviosIndex = reserve.indexOf(i - 1);
          let borrowLaterIndex = reserve.indexOf(i + 1);
          if(borrowPreviosIndex > -1) {
              answer++;
              removeBorrowGymSuit(reserve, borrowPreviosIndex);
              continue;
          }
          if(borrowLaterIndex > -1) {
              answer++;
              removeBorrowGymSuit(reserve, borrowLaterIndex);
              continue;
          };
      }
  }
  return answer;
}

function removeBorrowGymSuit(arr, borrowIndex) {
  // 빌려준 사람 또는 이미 빌린 사람 체육복 제거
  arr.splice(borrowIndex, 1);
}