function solution(k, tangerine) {
    let arrangeNumber = tangerine.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    let sorted = Object.entries(arrangeNumber).sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < sorted.length; i++) {
        let [key, value] = sorted[i];
        if(k - value <=0) {
            return i+1;
        }else {
            k = k-value;
        }
    }
}