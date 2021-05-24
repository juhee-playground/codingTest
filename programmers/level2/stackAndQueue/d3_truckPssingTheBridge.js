function solution(bridge_length, bridge_weight, waitingTruck) {
  let time = 0;
  let countTruck = waitingTruck.length;
  let passingTruck = [];
  let crossingTruck = [];
  let weightOnBridge = 0;
  // 대기하고 있는 트럭을 조건이 맞을때 마다 한대씩 보낸다.
  while(passingTruck.length < countTruck) {
    // 시간이 1초 지남
    time += 1;

    let somethingPass = false;

    // 다리위의 모든 트럭
    crossingTruck.forEach(truckOnBridge => {
      const same = truckOnBridge.passingDistance == bridge_length;
      // 같으면 트럭 나감
      if (same){
        somethingPass = true;
        passingTruck.push(truckOnBridge);
        weightOnBridge -= truckOnBridge.weight;
      }else{
        // 다르면 1 이동
        truckOnBridge.passingDistance += 1;
      }
    });

    if (somethingPass){
      crossingTruck.shift();
    }

    // 대기 -> 다리 
    if (waitingTruck.length != 0) {
      const waitingTruckWeight = waitingTruck[0];
      // 1. 다리위의 차 무게 + 대기 하고 있는 차의 무게 <= 다리무게 비교
      const canAddTruck = weightOnBridge + waitingTruckWeight <= bridge_weight;
      if (canAddTruck){

        // -맞으면 다리위로
        weightOnBridge += waitingTruckWeight;
        waitingTruck.shift();
        crossingTruck.push({weight:waitingTruckWeight, passingDistance:1});
      }
    }
  }

  return time;
}