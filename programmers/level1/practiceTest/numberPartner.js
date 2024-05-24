function solution(X, Y) {
  // 빈도 카운트를 저장할 배열
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);
  
  // 각 배열의 숫자 빈도를 계산
  for (const digit of X) {
      countX[digit]++;
  }
  for (const digit of Y) {
      countY[digit]++;
  }
  
  // 공통 숫자를 모을 배열
  const answer = [];
  for (let i = 0; i <= 9; i++) {
      const commonCount = Math.min(countX[i], countY[i]);
      for (let j = 0; j < commonCount; j++) {
          answer.push(i);
      }
  }
  
  // 공통 숫자가 없는 경우
  if (answer.length === 0) {
      return "-1";
  }
  
  // 공통 숫자가 모두 0인 경우
  if (answer.every(num => num === 0)) {
      return "0";
  }
  
  // 큰 숫자를 만들기 위해 내림차순 정렬
  answer.sort((a, b) => b - a);
  
  // 배열을 문자열로 변환하여 반환
  return answer.join('');
}