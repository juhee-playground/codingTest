/*
1. 초기 위치 설정: S의 위치를 찾아 currentPosition에 저장합니다.
2. 이동 방향 설정: 각 방향에 대해 dx와 dy 값을 미리 설정합니다.
3. 경로 처리: 각 명령에 대해 이동 방향과 거리를 읽고, 해당 방향으로 이동을 시도합니다.
4. 유효성 검사: 각 이동 단계마다 새로운 위치가 경계 내에 있고 장애물이 없는지 확인합니다.
5. 위치 업데이트: 유효한 경로라면 최종 위치를 currentPosition에 저장합니다.
*/
function solution(park, routes) {
  let currentPosition = [];
  const numRows = park.length;
  const numCols = park[0].length;

  // 현재 위치를 확인합니다. => 'S'의 위치 확인하기.
  for (let i = 0; i < park.length; i++) {
      const y = park[i].indexOf('S');
      if (y !== -1) {
          currentPosition = [i, y];
          break;
      }
  }

  const directions = {
    'E': [0, 1],
    'W': [0, -1],
    'S': [1, 0],
    'N': [-1, 0]
  };

  for (const route of routes) {
      const [direction, countStr] = route.split(" ");
      const count = Number(countStr);
      const [dx, dy] = directions[direction];
      let [x, y] = currentPosition;
      let canMove = true;

      for (let step = 0; step < count; step++) {
        x += dx;
        y += dy;

        // 배열 범위와 장애물을 확인합니다.
        // 조건을 변수로 분리하여 가독성 향상
        const isOutOfBounds = (x < 0 || x >= numRows || y < 0 || y >= numCols);
        const isObstacle = (park[x][y] === 'X');

        if (isOutOfBounds || isObstacle) {
          canMove = false;
          break;
        }
      }

      // 이동 가능하면 위치를 업데이트합니다.
      if (canMove) {
        currentPosition = [x, y];
      }
  }
  
  return currentPosition;
}