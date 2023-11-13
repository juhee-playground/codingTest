// 매일코테부활 #백준 #JavaScript #클래스2 #최대공약수최소공배수
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const fs = require('fs');
const [num1, num2]  = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let getGCD = (a, b) => ((a % b) === 0 ? b : getGCD(b, a % b));
let getLcm = (a, b) => (a * b) / getGCD(a, b);
console.log(getGCD(num1, num2));
console.log(getLcm(num1, num2));