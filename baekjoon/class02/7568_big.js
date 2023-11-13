// 매일코테부활 #백준 #JavaScript #클래스2 #덩치 #브루트 포스
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const K = parseInt(input.shift());

let people = [];
// 초기화
for (let i = 0; i < K; i++) {
    const [weight, height] = input[i].split(' ').map(Number);
    people.push({ index: i, weight, height, rank: 1 });
}
for (let i = 0; i < K; i++) {
    for (let j = 0; j < K; j++) {
        const { weight, height } = people[j];
        if (i !== j) {
            if (people[i].weight < weight && people[i].height < height) {
                people[i].rank++;
            }
        }
    }
}

const result = people.map(person => person.rank).join(' ');
console.log(result);