function solution(n) {
  let answer = '';
  let rest = 0;  // 자연수 n을 3으로 나누었을 때 나머지를 저장하기 위해
  let period = ["4", "1", "2"];

  while(n > 0) {
    rest = n % 3;
    n = parseInt(n / 3);

    if(rest === 0) {
      n = n -1;
    }

    answer = period[rest] + answer; // 3으로 나누어 떨어지는 경우는, 124 나라에서 앞자리 수가 바뀌거나 숫자의 길이가 바뀌는 구간이기 때문이다.
  }

return answer;
}