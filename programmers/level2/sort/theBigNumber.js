function solution(numbers) {
  var answer = "";

  let reverseNumbers = numbers.sort((a, b) => {
     if (Number(a.toString() + b.toString()) > Number(b.toString() + a.toString())){
        return 1
     }
      return -1
  });

  reverseNumbers.reverse().join("")
  // console.log("reverseNumbers", reverseNumbers.reverse().join(""));
  for(let i = 0; i < reverseNumbers.length; i++) {
      answer += reverseNumbers[i];
  }
  if(Number(answer) === 0) {
      answer = "0";
  } 

  return answer;
}