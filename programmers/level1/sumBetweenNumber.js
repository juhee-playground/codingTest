function solution(a, b){
    var answer = 0

    let smallNumber = (a <= b) ? a : b;
    let BigNumber = (a <= b) ?  b : a;

    for (let i = smallNumber; i <= BigNumber; i++) answer += i;

    return answer;
}