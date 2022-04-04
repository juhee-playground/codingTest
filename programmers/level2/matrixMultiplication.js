// #아침코테 #level2 #연습문제 #행렬의곱셈
function solution(arr1, arr2) {
  var answer = [[]];
  let rotateArr2 = rotateMatrix(arr2);
  // i행
  for(let i = 0; i < arr1.length; i++) {
      // j열
      answer[i] = [];
      for(let j = 0; j < rotateArr2.length; j++) {
          answer[i][j] = multiple(arr1[i], rotateArr2[j]);
      }
  }
  return answer;
}

function rotateMatrix(array) {
  var newArray = array[0].map(function(col, i) { 
    return array.map(function(row) { 
      return row[i] 
    })
  });
  return newArray;
}

function multiple(arr1, arr2) {
  const multiArr = arr1.map((number, index) => number * arr2[index]);
  return multiArr.reduce( (prev, curr) => prev + curr, 0);
}