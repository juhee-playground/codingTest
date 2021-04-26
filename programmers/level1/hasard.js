
function hasard(x) {
    var answer = true;
    let sumNum = 0;
    let changeToString = String(x);
    for (let i = 0; i < changeToString.length; i++) {
        sumNum += Number(changeToString[i]);
    }
    answer = x % sumNum === 0 ? true : false;
    return answer;
}