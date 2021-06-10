function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    let chagneArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    answer = chagneArr.join(" ");
    return answer;
}