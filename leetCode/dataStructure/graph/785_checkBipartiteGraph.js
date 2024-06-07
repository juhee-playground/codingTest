/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  let graphLen = graph.length;
  let colors = new Array(graphLen).fill(0);
  let seen = new Set();

  // 각 인덱스에 연결된 친구들을 하나씩 스택에 넣는다.
  for(let i = 0; i < graph.length; i++) {
      if(seen.has(i)) {
         continue;
      }

      let stack = [];
      // 스택에 값을 넣는다.
      stack.push(i);
      seen.add(i);
      colors[i] = 1;
      while(stack.length !== 0) {
          const idx = stack.pop();
          const linkedNodes = graph[idx];
          let color = colors[idx];
          for(let con_idx of linkedNodes) {
              // 없으면 넣어주고 색 확인하기
              if(!seen.has(con_idx)) {
                  seen.add(con_idx);
                  stack.push(con_idx);
                  // 색깔은 연결된 색과 다른 그룹 색을 칠한다.
                  colors[con_idx] = -1 * color;
                  continue;
              }
              if(colors[con_idx] * color !== -1) {
                  return false;
              }   
          }
      }
      
  }
  return true;

};