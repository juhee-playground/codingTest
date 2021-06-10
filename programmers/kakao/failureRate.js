// #아침코테 #프로그래머스 #level1 #카카오 #실패율
function solution(N, stages) {
  var answer = [];
  let floorFailure = [];
  for(let f = 1; f <= N; f++) {
    let notClearPerson = countNotClear(f, stages);
    let clearStagePerson = countClearStage(f, stages);
    let failureRate = clearStagePerson / notClearPerson * 100;
      
    floorFailure.push({ f, failureRate });
  }
  floorFailure.sort(sortByFailureRate);
  answer = [...new Set(floorFailure.map(item => item.f))];
  return answer;
}

function countNotClear(floor, stages) {
  return stages.filter(stage => floor <= stage).length;
}

function countClearStage(floor, stages) {
  return stages.filter(stage => floor === stage).length;
}

function sortByFailureRate(a, b) {
  return a.failureRate < b.failureRate ? 1 : a.failureRate > b.failureRate ? -1 : 0;
}