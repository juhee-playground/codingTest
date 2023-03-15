// 1. 하나의 값을 입력받을 때
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().trim();