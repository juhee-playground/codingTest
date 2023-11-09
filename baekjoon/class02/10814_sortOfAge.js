// 아침코테부활 #백준 #JavaScript #클래스2 #나이 순 정렬
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const xy = input.filter((v, i) => i >= 0).map((v, i) => {
    return v.split(' ');
});

xy.sort((a,b) => {
    return parseInt(a[0]) - parseInt(b[0]);
})

console.log(xy.join("\n").replaceAll("," , " "));
