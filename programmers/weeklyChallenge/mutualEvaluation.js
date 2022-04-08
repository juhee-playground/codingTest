// #아침코테 #위클리첼렌지 #상호평가

function solution(scores) {
  let answer = "";
  const rows = {};
  for(let i = 0; i < scores.length; i++) {
      const cols = scores[i];
      // cols 배열에서 최대값 최소값 구하기 
      const colsMaxIndex = cols.indexOf(Math.max(...cols));
      const colsMinIndex = cols.indexOf(Math.min(...cols));
      // 최대값 index, 최소값 index가 현재 index랑 같으면 0으로 바꾸기
      if(i === colsMaxIndex || i === colsMinIndex) {
          const index = i === colsMaxIndex ? colsMaxIndex : colsMinIndex;
          cols.splice(index, 1, 0);
      }
      for(let j = 0; j < cols.length; j++) {
          const item = scores[i][j];
          // console.log(i, j, " ==> ",scores[i][j]);
          // rows 배열에 j를 key로 삼아 배열 담기
          if(!rows[j]) {
              rows[j] = [];
          }
          if(item !== 0) {
              rows[j].push(item);    
          }
      }
  }
  
  // rows 각 배열의 평균구하기
  Object.values(rows).forEach(arr => { 
      // arr 평균값 구하기
      const result = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      const average = result / arr.length;
      answer += setGrade(average);
  });

  return answer;
}

function setGrade(score) {
  if(score >= 90) {
      return "A";
  }else if(score >= 80) {
      return "B";
  }else if(score >= 70) {
      return "C";
  }else if(score >= 50) {
      return "D";
  }else {
      return "F";
  }
}