function solution(s) {
    var answer = '';
    let splitNumberArr = s.split(" ");
    let minNumber = null;
    let maxNumber = null;
    for(let i = 0; i < splitNumberArr.length; i++) {
        let number = Number(splitNumberArr[i]);
        // 둘 다 null 이면 두개다 넣어주기
        if(minNumber === null && maxNumber === null) {
            minNumber = number;
            maxNumber = number;
            continue;
        }
        // minNumber 보다 작으면 최소값 바꾸기
        if(minNumber > number) {
            minNumber = number;
            continue;
        }
        // maxNumber보다 크면 최대값 바꾸기
        if(maxNumber < number) {
            maxNumber = number;
            continue;
        }
    }
    answer = minNumber + " " + maxNumber;
    return answer;
}