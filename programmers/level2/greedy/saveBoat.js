// #프로그래머스 #level2 #탐욕법(Greedy) #구명보트
function solution(people, limit) {
    people.sort((a,b) => a-b);
    let answer = 0;
    let minIndex = 0
    let maxIndex = people.length -1
    // 남아있는 사람이 없을 때
    while (minIndex <= maxIndex){
        // 한 사람만 남아 있을 때
        if (minIndex == maxIndex){ 
            answer++;
            break;
        }
        let minP = people[minIndex];
        let maxP = people[maxIndex];
        let sum = minP + maxP;
        if (sum <= limit){
            // minP maxP 나가
            minIndex++;
            maxIndex--;
        }else{
            // maxP 나가
            maxIndex--;
        }
        answer++;
    }
    return answer;
}