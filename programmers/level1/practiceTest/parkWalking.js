function solution(park, routes) {
  let currentPosition = [];
  
  // 현재 위치를 확인합니다. => 'S'의 위치 확인하기.
  for (let i = 0; i < park.length; i++) {
      const y = park[i].indexOf('S');
      if (y !== -1) {
          currentPosition = [i, y];
          break;
      }
  }

  for (const route of routes) {
      const [direction, countStr] = route.split(" ");
      const count = Number(countStr);
      let newPosition = [...currentPosition];
      let canMove = true;

      for (let step = 0; step < count; step++) {
          newPosition = move(direction, newPosition);

          const [x, y] = newPosition;
          // 배열 범위와 장애물을 확인합니다.
           const isOutOfBounds = (x < 0 || x >= park.length || y < 0 || y >= park[0].length);
          const isObstacle = (park[x][y] === 'X');
          if (isOutOfBounds || isObstacle) {
              canMove = false;
              break;
          }
      }

      // 이동 가능하면 위치를 업데이트합니다.
      if (canMove) {
          currentPosition = [...newPosition];
      }
  }
  
  return currentPosition;
}

function move(direction, position) {
  const [x, y] = position;
  switch (direction) {
      case 'E':
          return [x, y + 1];
      case 'W':
          return [x, y - 1];
      case 'S':
          return [x + 1, y];
      case 'N':
          return [x - 1, y];
      default:
          return position;
  }
}