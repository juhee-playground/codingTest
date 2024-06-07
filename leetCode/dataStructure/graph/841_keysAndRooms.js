/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let visited = new Set();
  const startNode = 0;
  let stack = [startNode];

  while(stack.length > 0) {
      let currentNode = stack.pop();
      
      if(!visited.has(currentNode)) {
          visited.add(currentNode);

          let keys = rooms[currentNode];
          for(let key of keys) {
              if (!visited.has(key)) {
                  stack.push(key);
              }
          }
      }
  }

  // 방개수와 방문한 수를 확인한다.
  return rooms.length === visited.size;
};