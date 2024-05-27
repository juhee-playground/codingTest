function solution(s) {
  const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  let randomNumString = s;
  
  for(let i = 0; i < numberArr.length; i++) {
      const word = numberArr[i];
      if(randomNumString.includes(word)) {
          randomNumString = randomNumString.replaceAll(word, i.toString());
      }else {
          continue;
      }
  }
  return parseInt(randomNumString);
}