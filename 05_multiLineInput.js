// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
