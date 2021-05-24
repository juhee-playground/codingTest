function solution(s)
{
    var answer = 0;
    let charArr = s.split("");
    let compareArr = [];
    for(let i = 0; i < charArr.length; i++) {
        if(compareArr.length === 0) {
            compareArr.push( charArr[i]);
            continue;
        }

        let lastCharIndex = compareArr.length-1;
        let compareStringLastChar = compareArr[lastCharIndex];
        let charOne = charArr[i];
        if(compareStringLastChar === charOne) {
            // 마지막 문자랑 비교한 값 같으면 지우기
            compareArr.pop();
        }else {
            compareArr.push(charOne);
        }
    }
    if(compareArr.length === 0) {
        answer = 1;
    }
    return answer;
}