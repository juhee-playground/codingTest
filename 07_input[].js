const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map(v=>+v); // 탐색 대상
const B = input[3].split(' ').map(v=>+v);