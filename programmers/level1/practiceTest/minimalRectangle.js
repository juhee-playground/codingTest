function solution(sizes) {
  var answer = 0;
  let maxGaro = 0;
  let maxCero = 0;
  for(let i = 0; i < sizes.length; i++) {
      let [garo, cero] = sizes[i];
      // 1차 비교: 가로와 세로 비교해서 큰걸 가로쪽으로
      if(garo < cero) {
          let tmp = garo;
          garo = cero;
          cero = tmp;
      }
      // 가로 세로 커버 가능한지 확인하기
      // 한쪽만 커버되면 더 큰 수의 수를 바꾸기
      if(maxGaro < garo) {
          maxGaro = garo;
      }
      
      if(maxCero < cero) {
          maxCero = cero;
      }
  }  
  return maxGaro * maxCero;
}