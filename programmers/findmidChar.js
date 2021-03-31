function solution(s) {
    var answer = '';
    let index = Math.round(s.length / 2);

    answer = s.length % 2 === 0 ?  s[index-1] + s[index] : s[index-1];

    return answer;
}