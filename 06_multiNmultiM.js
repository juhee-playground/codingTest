// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
//  ex) n 입력 - 공백으로 구분된 n개의 값 입력,  m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);