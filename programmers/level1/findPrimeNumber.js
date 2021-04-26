function solution(n) {
    var answer = 0;
    let primeNumbers = Array(n+1).fill(true).fill(false, 0, 2);

    for(let i=2; i*i<=n; i++){
        if(primeNumbers[i]){
            for(let j=i*i; j<=n; j+=i){
                primeNumbers[j] = false;
            }
        }
    }
    answer = primeNumbers.filter(e => e).length;

    return answer;
}