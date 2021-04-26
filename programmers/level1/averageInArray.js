function solution(arr) {
    var answer = 0;
    const sumArray = (accumulator, currentValue) => accumulator + currentValue;
    let sum = arr.reduce(sumArray);
    answer = sum / arr.length;

    return answer;
}