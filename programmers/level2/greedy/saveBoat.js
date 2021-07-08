// #프로그래머스 #level2 #탐욕법(Greedy) #구명보트

function solution(people, limit) {
  let sumWeight = 0;
  let count = 0;
  // 큰 숫자대로 정렬
  people.sort((a,b) => b - a);
  let arr = people;
  let boat = [];
  let isLeave = false;
  
  arr.forEach((item,index) => {
      sumWeight += item;
      console.log(people);
      // 배가 견딜 수 있는 무게 >= 배에 탄 것들의 합
      // (단, 다음 것이랑 더했을 때 배가 견딜 수 있는 무게 보다 커야 한다.)
      // console.log("cur: ", item," sum: " , sumWeight," nextSum: " , sumWeight + people[index+1]);
      if(limit > sumWeight && !isLeave) {
          boat.push(people);
          people.shift();
          console.log("더 태우자", people);
          // 더 태울 수 있는 애 고르기 :: 나랑 같이 태울 수 있는 것들 고르기
          { arr, isLeave } = moreTakePeople(people, sumWeight, limit);
      }else {
          count++;
          sumWeight = 0;
          console.log("섬 탈출", count);
      }
  });
  return count;
}

function moreTakePeople(arr, sum, maxWeight) {
  console.log(arr, sum, maxWeight);
  let isLeave = false;
  arr.sort();
  for(let i = 0; i < arr.length; i++) {
      if(maxWeight > sum + arr[i]) {
          sum += arr[i];
          arr.splice(i, 1);
          console.log("더 태워");
          continue;
      }else if(maxWeight === sum + arr[i]) {
          sum += arr[i];
          arr.splice(i, 1);
          arr.sort((a,b) => b - a);
          console.log("더 태우고 출발");
          return { arr; arr, isLeave, true };
      }else {
          console.log("태울 사람 없어");
          arr.sort((a,b) => b - a);
          return { arr; arr, isLeave, true };
      }
  }
}