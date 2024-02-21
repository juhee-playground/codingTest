function solution(n) {
    var answer = n+1;
    const binaryString = convertBinary(n);
    const oneOfNumberLen = countingOne(binaryString);
    while(countingOne(convertBinary(answer)) !== oneOfNumberLen) {
        answer +=1;
    }
    return answer;
}

function convertBinary(number) {
    return number.toString(2);
}

function countingOne(string) {
    return [...string].filter(char => char === '1').length;
}