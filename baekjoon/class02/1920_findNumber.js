// 매일코테 #백준 #Javascript #클래스02 #수찾기 #이진탐색
// https://www.acmicpc.net/problem/1920

const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const targets = input[1].split(' ').map(v => +v); // 탐색 대상
const findItems = input[3].split(' ').map(v => +v);
let answer = [];

const binarySearch = (list, target, left, right) => {
    let mid = 0;
    let res = false;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(list[mid] === target) {
            res = true;
            break;
        }
        // 대소 비교로 범위 지정
        if(list[mid] > target) {
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return res;
}

targets.sort((a, b) => a - b);

for(let i = 0; i < findItems.length; i++) {
    const result = binarySearch(targets, findItems[i], 0, targets.length -1);
    result ? answer.push(1) : answer.push(0);
}

console.log(answer.join("\n"));