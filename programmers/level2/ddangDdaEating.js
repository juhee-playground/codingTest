function solution(land) {
  var answer = 0;
  let preIndex = 0;
  let curIndex = 0;
  let maxNumber = 0;
  let maxIndex = 0;
  for(let i = 0; i < land.length; i++) {
      let arr = land[i];
      maxNumber = Math.max(...arr);
      maxIndex = arr.indexOf(maxNumber);
      // 다음 Arr에서 맥스값과 저장한 인덱스값 비교
      console.log(preIndex, maxIndex);
      if(i > 0 && preIndex === maxIndex) {
          // 같으면 삭제하고 다음꺼에서 맥스값 찾고 더하기, 맥스의 인덱스값 저장.
          // 삭제 하니까 인덱스가 밀리는 현상 발생 0으로 변경해주기 
          arr.splice(maxIndex, 1, 0);
          maxNumber = Math.max(...arr);
          maxIndex = arr.indexOf(maxNumber);
      }

      console.log(arr, maxNumber, maxIndex)
      // 현재 Arr에서 맥스값 찾고 더하기, 맥스의 인덱스값 저장.
      // 다르면 맥스값 더하고 맥스의 인덱스값 저장
      preIndex = maxIndex;
      answer += maxNumber;
  }
  return answer;
}