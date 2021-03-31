function solution(array, commands) {
  var answer = [];
  for(let i = 0; i < commands.length; i++) {
      let startIndex = commands[i][0]-1;
      let endIndex = commands[i][1];
      let findIndex = commands[i][2]-1;
      console.log(startIndex, endIndex, findIndex);

      let sliceArr = array.slice(startIndex, endIndex);
      console.log(sliceArr);
      sliceArr.sort((a,b) => a-b);
      answer.push(sliceArr[findIndex]);
  }

  return answer;
}