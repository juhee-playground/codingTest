function solution(phone_number) {
  var answer = '';
  let reverseNumber = reverseString(phone_number);
  let changeStr = reverseNumber.substring(4);
  answer = reverseNumber.replace(changeStr, "*".repeat(changeStr.length));
  answer = reverseString(answer);
  return answer;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}