function solution(babbling) {
  var answer = 0;
  const allowedBabbling = ["aya", "ye", "woo", "ma"];
  const copyBabbling = [...babbling];
  
  const pattern = `^(${allowedBabbling.join("|")})+$`;
  const samePattern = `(${allowedBabbling.join('|')})\\1`;
  const regex = new RegExp(pattern);
  const samePatternRegex = new RegExp(samePattern);
 
  for(let i = 0; i < babbling.length; i++) {
      if(regex.test(babbling[i]) && !samePatternRegex.test(babbling[i])) {
          answer++;
      }
  }
  
  return answer;
}