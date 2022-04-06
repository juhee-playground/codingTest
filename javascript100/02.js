// https://www.notion.so/2-788973aacbf949dc81e98db31036d458
// #Javascript #JS100제 #02 #배열의 내장함수

// 문제: <pass> 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
// splice 관련 링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/* 
var arr = [200, 100, 300];
//pass
console.log(arr);

출력
[200, 100, 10000, 300]
*/

var arr = [200, 100, 300];
arr.splice(2, 0 , 10000)

console.log(arr);