// 아침코테 #백준 #Javascript #클래스01 #단어공부

// 타이틀: 1157 단어공부
// 문제: 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

/*
입력
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
*/


// 입력 예시
/*
Mississipi
zZa
*/

/* 출력 예시
?
Z
*/
const fs = require('fs');
const readFileSyncAddress = "../../input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

const dic = {};
const upperWord = input.toUpperCase();
if(upperWord.length === 1) {
    console.log(upperWord);
    return;
}
for(let i = 0; i < upperWord.length; i++) {
    const char = upperWord[i];
    if(dic[char]) { 
        dic[char] += 1;
    }else {
        dic[char] = 1;
    }
}

console.log(dic);
const dicArr = Object.keys(dic);
const answer = { count: 0 , char:"" };
let flag = false;
for(let i = 0; i < dicArr.length; i++) {
    const key = dicArr[i];
    if(answer.count === 0 || answer.count < dic[key]) {
        answer.count = dic[key];
        answer.char = key;
        flag = false;
    }else if(answer.count === dic[key]) {
        flag = true;
    }
}

console.log(flag ? "?" : answer.char);