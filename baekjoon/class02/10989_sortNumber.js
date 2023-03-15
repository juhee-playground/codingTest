// 아침코테 #백준 #JavaScript #클래스2 #수정렬하기3
// https://www.acmicpc.net/problem/10989
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const fs = require('fs');
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// 0으로 초기화
const nums = Array.from({length: n}, (v, i) => i = 0)
console.log(nums);
for(let i = 0; i < arr.length; i++) {
    const index = arr[i];
    nums[index]= nums[index] + 1;
}

for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
        for(let j = 0; j < nums[i]; j++) {
            console.log(i);
        }
    }  
}



  
  
  