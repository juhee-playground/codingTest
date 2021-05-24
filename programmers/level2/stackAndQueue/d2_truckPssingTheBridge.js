function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let passingTruck = [];
  let crossingTruck = [];
  let waitingTruck = truck_weights;
// 대기하고 있는 트럭을 한대씩 보낸다.
  while(waitingTruck.length > 0) {
      let sumCrossingWeight = sumCrossingTrueckWeight(crossingTruck);
      // console.log(sumCrossingWeight);
      
      // crossTheTruck 합과 통과하려고 하는 트럭의 합이 다리가 견딜 수 있는 무게보다 클 수 없다.
      if(sumCrossingWeight + waitingTruck[0] < weight) {
          crossingTruck.push(waitingTruck[0]);
          waitingTruck.shift();
      }else {
          for(let i = 0; i < bridge_length; i++) {
              time++;
          }
      // 값 이 크면 다리의 길이만큼 시간 초과
          answer += 2;
          passingTruck.push(crossingTruck[0]);
          crossingTruck.shift();
      }
  }
  // console.log(time, " 대기: ", waitingTruck, "진행중: ", crossingTruck);
return answer;
}

function sumCrossingTrueckWeight(crossingTruck) {
  const sumWeight = (accumulator, currentValue) => accumulator + currentValue;
  crossingTruck.length > 0 ? crossingTruck.reduce(sumWeight) : 0;
}