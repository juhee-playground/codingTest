//#아침코테 #level2 #정렬 #H-index 
function solution(citations) {
  var answer = 0;
  const papers = citations.length
  citations.sort((a, b) => b - a);
  for(let i = 1; i <= papers; i++) {
      const moreThanNumber = citations.filter(number => i <= number);
      if(moreThanNumber.length === i || citations[i] === i) {
           return i;  
      }
  }
  return 0;  
}