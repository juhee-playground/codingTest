function solution(a, b) {
  let answer = '';
  const yoil = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let sum = 0;
  for(let i = 1; i < a; i++) {
      switch(i) {
          case 1: case 3: case 5: case 7:
          case 8: case 10: case 12:
              sum +=31;
              break;
          case 4: case 6: case 9: case 11:
               sum += 30;
              break;
          case 2:
              sum += 29;
              break;
      }
  }
  sum += b;
  let index = sum % 7;
  console.log("index", index);
  answer = yoil[index];
  return answer;
}