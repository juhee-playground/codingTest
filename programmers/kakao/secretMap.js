function solution(n, arr1, arr2) {
  var answer = [];
  for(let i = 0; i < n; i++) {
      
      // 배열1,2  한개씩 돌리면서 2진수 변환
      let num1 = arr1[i].toString(2);
      let num2 = arr2[i].toString(2);
      // 자릿수 맞추기
      num1 = concatRepeatZero(num1, n - num1.length);
      num2 = concatRepeatZero(num2, n - num2.length);
      
      let binaryArr1 = num1.split("");
      let binaryArr2 = num2.split("");
      // 0, 1 => " ", # 으로 변환
      let string = convertToBinaryChar(n, binaryArr1, binaryArr2);
      answer.push(string);
  }
  return answer;
}

function concatRepeatZero(num, count) {
  return "0".repeat(count) + num;
}

function convertToBinaryChar(n, binaryArr1, binaryArr2) {
  let string = "";
  for(let i = 0; i < n; i++) {
      if(binaryArr1[i] === "0" && binaryArr2[i] === "0") {
          string += " ";
      }else {
          string += "#";
      }
  }
  return string;
}