function solution(numbers) {
    // 배열 정렬하기
    numbers.sort();

    var answer = [];
    // for문 돌면서
    for(let i = 0; i < numbers.length-1; i++) {
        // 앞에서부터 바로 뒤에꺼랑 더하기
        for(let j = i+1; j < numbers.length; j++) {
            let addNumber = Number(numbers[i]) + Number(numbers[j]);
            // answer 안에 방금 더한 값이 answer에 있는지 확인하기
            if(!answer.includes(addNumber)) {
                // 없을때만 푸시
                answer.push(Number(addNumber));
            }   
        }
    }
    answer.sort(function(a, b){ return a-b; });
    return answer;
}

// 남들 코드에서 배운것.

// const answer = [...new Set(temp)]
// 위에 처럼 하면 중복을 제거할 수 있다고 한다,

