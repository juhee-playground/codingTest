function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let passingTruck = [];
  let crossingTruck = [];
  let waitingTruck = truck_weights;
  // 대기하고 있는 트럭을 한대씩 보낸다.
  for(let i = 0; i < waitingTruck.length; i++) {
      
      // crossTheTruck 합과 통과하려고 하는 트럭의 합이 다리가 견딜 수 있는 무게보다 클 수 없다.
      let sumCrossingWeight = sumCrossingTrueckWeight(crossingTruck);
      if(sumCrossingWeight + waitingTruck[i] < weight) {
          waitingTruck.shift();
          crossingTruck.push(waitingTruck[i]);
      }
  }
  
  // crossTheTruck 들의 합이 다리가 견딜 수 있는 무게보다 클 수 없다.
  
  
  
  return answer;
}
  
function sumCrossingTrueckWeight(crossingTruck) {
  const sumWeight = crossingTruck.reduce((stack, el)=>{
    return stack.concat(el); // 이전 요소의 누적된 배열과 현재 요소를 하나의 배열로 합함.
  }, []);
  return sumWeight;
}