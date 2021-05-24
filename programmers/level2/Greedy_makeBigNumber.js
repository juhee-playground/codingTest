function solution(number, k) {
  let picker = [];
  let stringToNumber = [];
   k = number.length - k;
  for(let i = 0; i < number.split('').length; i++) {
      stringToNumber.push(Number(number.charAt(i)));
  }

  var answer = '';
  const dfs = (nums, num, arr = []) => {
      //k개를 선택한다는가정에 k개가 선택 됐다면 출력
      if (num === k) picker.push([...arr]);
      else {
          for (let i = 0; i < nums.length; i++) {
            arr.push(nums[i]);
            dfs(nums.slice(i + 1), num + 1, arr);
            arr.pop();
          }
      }
  };
  
  dfs(stringToNumber, null);

  let numberList = [];
  for(let i = 0; i < picker.length; i++) {
      numberList.push(Number(picker[i].join('')));
  }
  numberList.sort();
  numberList.reverse();
  answer = numberList[0].toString();
  return answer;
}