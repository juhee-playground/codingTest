function solution(answers) {
  var answer = [];
  const supojaOne = [1, 2, 3, 4, 5];
  const supojaTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const supojaThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let one = answers.filter((answer, index) => answer === supojaOne[index % 5]);
  let two = answers.filter((answer, index) => answer === supojaTwo[index % 8]);  
  let three = answers.filter((answer, index) => answer === supojaThree[index % 10]);

  let numbers = [one.length, two.length, three.length];
  let maxNumber = Math.max.apply(null, numbers);

  if(maxNumber === one.length) answer.push(1);
  if(maxNumber === two.length) answer.push(2);
  if(maxNumber === three.length) answer.push(3);

  return answer;
}