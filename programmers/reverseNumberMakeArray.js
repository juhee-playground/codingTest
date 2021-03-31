function solution(n) {
    var answer = [];
    String(n).split('').reverse().map( item => answer.push(Number(item)) );
    return answer;

    // 다른사람의 좋은 풀이
    // var arr = [];

    // do {
    //     arr.push(n%10);
    //     n = Math.floor(n/10);
    // } while (n>0);

    // return arr;
}