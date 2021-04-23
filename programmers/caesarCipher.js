function solution(s, n) {
    var answer = "";
    const lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < s.length; i++) {
        // 문자가 공백이면 패스
        if(s[i] === " ") {
            answer += s[i];
            continue;
        } 
        // 문자가 대문자인지 소문자인지 판별
        let isUpperCase = checkUpperCase(s[i]);
        if(isUpperCase) {
            answer += changeCipher(upperList, s[i], n);
        }else {
            answer += changeCipher(lowerList, s[i], n);
        }
    }
    return answer;
}

function checkUpperCase(char) {
    if(char.toUpperCase() === char) {
        return true;
    }else {
        return false;
    }
}

function changeCipher(arr, char, n) {
    let findIndex = arr.indexOf(char);
    findIndex = (findIndex + n) % 26;
    return arr[findIndex];
}