function solution(s)
{
    var answer = 0;
    let initChar = s.charAt(0);
    for(let i = 0; i < s.length; i++) {
        if(i < s.length-1) {
            if(s.charAt(i) === s.charAt(i+1)) {
                let deleteString = s.charAt(i) + s.charAt(i+1);
                s = s.replace(deleteString, "");
                i = i > 0 ? i - 2: i - 1;
            }else {
                initChar = s.charAt(i);
            }
        }else {
            return answer;
        }

        if(s.length === 1 || s.length % 2 === 1) {
            return answer;
        }
    }
    
    if(s.length === 0) {
        answer = 1;
    }

    return answer;
}