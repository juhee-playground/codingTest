function solution(k, score) {
  var answer = [];
  let 명예의전당 = [];

  // 배열에 값을 k 만큼 만든다.
  for(let i = 0; i < score.length; i++) {
      // 배열에 k 만큼 차있지 않으면 값을 넣는다.
      if(명예의전당.length < k) {
          // 값 넣기, head, tail 설정
          명예의전당.push(score[i]);
          // min = min !== null && min < score[i] ? min : score[i];
      } else {
          let maxNum = Math.max(...명예의전당);
          let minNum = Math.min(...명예의전당);
          // k개 이상이면 비교하기.
          if(maxNum < score[i] || minNum < score[i]) {
              // 제일 큰거랑 비교했을 때 크면 맨뒤로 넣기.
              // 제일 작은 숫자보다 크면 맨 앞에꺼 빼고 일단 넣기;
              명예의전당.shift();
              명예의전당.push(score[i]);
          }
      }
      명예의전당.sort((a,b) => a - b);
      answer.push(명예의전당[0]);
  }
  return answer;
}