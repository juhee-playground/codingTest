function solution(pocketmons) {
  var answer = 0;
  let havePocketmon = [];

  // 포켓몬 리스트를 돌린다.
   pocketmons.forEach(pocketmon => {
      // 다음 포켓몬이 선택한 배열에 들어있는지 확읺한다.
      // 여기서 선택한 포켓몬 배열의 길이가 리스트의 절반 보다 클 수 없다.
      if(havePocketmon.indexOf(pocketmon) < 0 && answer < pocketmons.length / 2) {
          // 있으면 넘어가고 없으면 추가한다.
          havePocketmon.push(pocketmon);
          answer++;
      }
  });
  return answer;
}
// 다른 사람의 풀이를 보니 Set을 많이 썼다.
// Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 
// 하나의 Set 내 값은 한 번만 나타날 수 있습니다. 
// 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.


// 간단한 방법
// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];
//   return arr.length > max ? max : arr.length
// }
