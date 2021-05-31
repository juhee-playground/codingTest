/* 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다. */

function solution(new_id) {
  var answer = '';
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  let recommandId = changeLowerCase(new_id);
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  recommandId = removeSpecialChar(recommandId);
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    recommandId = checkPunctuation(recommandId);
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if(recommandId === "") {
      recommandId = "a";
    }
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    recommandId = checkIdLength(recommandId);
    recommandId = checkPunctuation(recommandId);
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  let idLength = recommandId.length;
  let repeatChar = recommandId.charAt(idLength-1);
  if(idLength <= 2) {
    for(let i = idLength; i < 3; i++) {
      recommandId += repeatChar;
    }
    return recommandId;
  }
  answer = recommandId;

  return answer;
}

function changeLowerCase(id) {
  let changeId = id.toLowerCase();
  return changeId;
}

function removeSpecialChar(id) {
  let reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
  //특수문자 검증
  if(reg.test(id)){
    //특수문자 제거후 리턴
    return id.replace(reg, "");    
  } else {
    //특수문자가 없으므로 본래 문자 리턴
    return id;
  } 
}

function checkPunctuation(id) {
    if(id.indexOf("..") > -1) {
      for(let i = 1; i <= id.length; i++) {
        if(id.charAt(i-1) === "." && id.charAt(i) === ".") {
          id = id.replace("..", ".");
          i--;
        }
      }
    }


  let punctuationOfPosition = id.indexOf(".");
  if(punctuationOfPosition === 0) {
    id = id.replace(".", "");
  }

  let lastIdIndex = id.length - 1 ;  
  if(id.charAt(lastIdIndex) === "." ) {
    id = id.substring(0, lastIdIndex);
  }
  return id;

}

function checkIdLength(id) {
  if(id.length < 16) {
    return id;
  }else {
    let sliceId = id.substring(0, 15);
      console.log("checkId", id, sliceId);
    return sliceId;
  }
}