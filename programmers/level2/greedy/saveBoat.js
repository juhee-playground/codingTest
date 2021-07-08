// #프로그래머스 #level2 #탐욕법(Greedy) #구명보트
function solution(people, limit) {
    people.sort((a,b) => a-b);
    let answer = 0;
    
    // 남아있는 사람이 없을 때
    while (people.length > 0){
        // 한 사람만 남아 있을 때
        if (people.length == 1){ 
            answer++;
            break;
        }
        let minP = people[0];
        let maxP = people[people.length-1];
        let sum = minP + maxP;
        
        if (sum <= limit){
            // minP maxP 나가
            people.pop()
            people.shift()
        }else{
            // maxP 나가
            people.pop()
        }
        answer++;
    }
    return answer;
}