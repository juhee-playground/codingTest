// 아침코테 #백준 #Javascript #클래스2 #직각삼각형

// 타이틀: 4153 직각삼각형
// 문제: 과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오

/*
입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다.

출력
각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.
*/


// 입력 예시
/*
6 8 10
25 52 60
5 12 13
0 0 0
*/

/* 출력 예시
right
wrong
right
*/

// 3. 여러 줄의 값들을 입력받을 때
const fs = require('fs');
// 백준 테스트시 주석 제거
// const readFileSyncAddress = "/dev/stdin";

// vscode test시 주석 제거
const readFileSyncAddress = "../../input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
for(let i = 0; i < input.length-1; i++) {
    const numbers = input[i];
    const sides = numbers.split(" ");
    if(isRightTriangle(sides)) {
        console.log("right");
    }else {
        console.log("wrong");
    }
}

function isRightTriangle(arr) {
    // 제일 긴변 찾기
    const numbers = arr.map(char => Number(char));
    numbers.sort((a, b) => a - b);
    // hypotenuse 빗변
    const [a, b, h] = numbers;
    // 나머지 두변 제곱 더하기 
    const squareRest = pow(a) + pow(b);
    // 제일 긴변 제곱 
    const squareH = pow(h);
    // 둘이 비교해서 같으면 true 다르면 false
    return squareRest === squareH ? true : false;
}


function pow(number) {
    return Math.pow(number, 2);
}