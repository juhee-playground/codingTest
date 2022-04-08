function solution(price, money, count) {
    let answer = 0;
    let sum = 0;

    for(let i = 1; i <= count; i++) {
        money -= price * i;
    }

    answer = money >= 0 ? 0 : Math.abs(money);
    return answer;
}
