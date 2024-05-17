// 매일코테부활 #백준 #JavaScript #클래스1 #문자와문자열 #문자열

const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const fs = require('fs');
const [string, char] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(string[Number(char) -1]);