// 아침코테 #백준 #JavaScript #클래스2 #팰린드롬수

// 타이틀: 1259 팰린드롬수
// 문제: 입력된 수를 뒤에서부터 읽어도 같다면 그 수는 팰린드롬수다. 펠림드롬수를 판별하시오.

/*
어떤 단어를 뒤에서부터 읽어도 똑같다면 그 단어를 팰린드롬이라고 한다. 'radar', 'sees'는 팰린드롬이다.

수도 팰린드롬으로 취급할 수 있다. 수의 숫자들을 뒤에서부터 읽어도 같다면 그 수는 팰린드롬수다. 
121, 12421 등은 팰린드롬수다. 123, 1231은 뒤에서부터 읽으면 다르므로 팰린드롬수가 아니다. 
또한 10도 팰린드롬수가 아닌데, 앞에 무의미한 0이 올 수 있다면 010이 되어 팰린드롬수로 취급할 수도 있지만, 
특별히 이번 문제에서는 무의미한 0이 앞에 올 수 없다고 하자. 입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 
각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄마다 1 이상 99999 이하의 정수가 주어진다. 입력의 마지막 줄에는 0이 주어지며, 이 줄은 문제에 포함되지 않는다.

출력
각 줄마다 주어진 수가 팰린드롬수면 'yes', 아니면 'no'를 출력한다.
*/


// 입력 예시
// 121
// 1231
// 12421
// 0

// 출력 예시
// yes
// no
// yes

const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
    const value = input[i];
    if(value !== "0") {
        const isSame = isPalindromes(value);
        console.log(isSame ? "yes" : "no");
    }
}

function isPalindromes(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return str === joinArray;
}