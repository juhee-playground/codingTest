function solution(A, B) {
  var answer = 0;
  let str = [...A];
  
  for(let i = 0; i < B.length; i++) {
      if(str.join('') === B) { 
          return i;
      } else {
          const lastChar = str.pop();
          str.unshift(lastChar);
      }
  }
  return -1;
}

