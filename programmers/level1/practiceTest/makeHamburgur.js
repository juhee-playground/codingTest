function solution(ingredient) {
  var answer = 0;
  let package = [];

  for(let i = 0; i < ingredient.length; i++) {
      package.push(ingredient[i]);

      if (package.length >= 4 &&
          package[package.length - 4] === 1 &&
          package[package.length - 3] === 2 &&
          package[package.length - 2] === 3 &&
          package[package.length - 1] === 1) {

          package.splice(-4);
          answer++;
      }
  }

  return answer;
}