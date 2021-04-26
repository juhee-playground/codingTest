function solution(strings, n) {
    var answer = [];
    strings.sort(function(a, b) {
      if(a[n] < b[n]) return -1;
      if(a[n] > b[n]) return 1;
      if(a[n] === b[n]) {
          let res = a < b ? -1 : 1; 
          return res;
      }
    });
    answer = strings;
    return answer;
}