function solution(s) {
  var answer = [];
  const arr = [...s];
  const dic = new Map();
  
  for(let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if(dic.has(char)) {
          const difference = i - dic.get(char);
          answer.push(difference);
      }else {
          answer.push(-1);
      }
      dic.set(arr[i], i);
  }
  return answer;
}