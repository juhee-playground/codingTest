function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let time = 0;
  let countTruck = truck_weights.length;
  let passingTruck = [];
  let crossingTruck = [];
  let waitingTruck = truck_weights;
  // 대기하고 있는 트럭을 조건이 맞을때 마다 한대씩 보낸다.
  while(passingTruck.length < countTruck) {
      let sumCrossingWeight = sumCrossingTrueckWeight(crossingTruck);
      for(let i = 1; i <= bridge_length; i++) {
          // 다리를 빠져나갈 수 있는 조건
          // 트럭이 지나간 길이가 다리의 길이보다 같을 때
          if(i === bridge_length) {
              passingTruck.push(crossingTruck[0]);
              crossingTruck.shift();
              console.log("index", answer, passingTruck,crossingTruck, );
          }
          
          // 다리에 오를 수 있는 조건
          // crossTheTruck +  대기하고 있는 첫번째 트럭의 무게 < 다리가 견딜 수 있는 무게
          if(sumCrossingWeight + waitingTruck[0] < weight) {
              crossingTruck.push(waitingTruck[0]);
              waitingTruck.shift();
          }
          answer++;
      }
      

  }
  return answer;
}

function sumCrossingTrueckWeight(crossingTruck) {
  const sumWeight = (accumulator, currentValue) => accumulator + currentValue;
  return crossingTruck.length > 0 ? crossingTruck.reduce(sumWeight) : 0;
}