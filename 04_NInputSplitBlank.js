// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);