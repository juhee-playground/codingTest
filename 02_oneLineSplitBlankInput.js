// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(" ");
