function solution(n)
{
  var answer = 0;
  String(n).split('').map(items => {
    answer += Number(items);
  })
  return answer;
}
