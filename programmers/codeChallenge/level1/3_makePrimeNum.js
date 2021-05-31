function solution(nums) {
  let answer = 0;
  let pickArr = [];

  const dfs = (nums, num, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === 3) pickArr.push([...arr]);
  else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        dfs(nums.slice(i + 1), num + 1, arr);
        arr.pop();
      }
    }
  };
  dfs(nums, 0);

  for(let i = 0; i < pickArr.length; i++) {
    if(chkPrime(sumArr(pickArr[i]))) {
      answer++;
    }
  }

  return answer;
}

function sumArr(arr) {
  const result = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  return result;
}

function chkPrime(num) {
  if(num < 2) {
    return false;
  }

  for(let i = 2; i <= num / 2; i++){
    if(num % i === 0){
      return false;
    }        
  }

  return true;
};