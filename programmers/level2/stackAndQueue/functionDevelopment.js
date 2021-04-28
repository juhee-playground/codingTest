function solution(progresses, speeds) {
    var answer = [];
    const restProgress = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    let releaseDay = 0;
    let count = 0;
    releaseDay = restProgress[0];
    for(let i = 0; i < restProgress.length; i++) {
        // 처음에 릴리즈 한 날이랑 비교
        count++;
        if(i < restProgress.length-1) {
            console.log(releaseDay, restProgress[i+1], releaseDay < restProgress[i+1]);
            if(releaseDay < restProgress[i+1]) {
                answer.push(count);
                count = 0;
                releaseDay = restProgress[i+1];
            }
        }else if(releaseDay === restProgress[i+1]) {
        // 앞에 숫자와 같으면 넘어가기 다음 숫자로
            continue; 
        }else {
            answer.push(count);
        }
    }

    return answer;
}