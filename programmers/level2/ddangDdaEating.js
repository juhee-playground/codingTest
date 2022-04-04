// #아침코테 #프로그래머스 #level2 #땅따먹기
function solution(land) {
    var answer = 0;
    let initArr = [];
    // 초기값 세팅
    for(let i = 0; i < land[0].length; i++) {
        initArr[i] = land[0][i];
    }

    for(let i = 1; i < land.length; i++) {
        let curArr = land[i];
        let maxArr = whatIsmaxSum(initArr, curArr);

        initArr = maxArr;
    }
    answer = Math.max(...initArr);
    return answer;
}

function whatIsmaxSum(initArr, curA) {
    let max = 0;
    let arr = [];
    for(let i = 0; i < curA.length; i++) {
        max = 0;
        for(let j = 0; j < curA.length; j++) {
            if(j !== i && max < curA[i] + initArr[j]) {
                max = curA[i] + initArr[j];
            }
        }
        arr.push(max);
    }
    return arr;
}
