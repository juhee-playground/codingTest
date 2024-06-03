/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  // 현재 컬러 확인하기
  const curColor = image[sr][sc];

   if(curColor === color) {
      // 변경 필요 없음.
      return image;
   }
   
  function dfs(x, y) {
      // 벗어나는 거 대비
      if(x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] !== curColor) {
          // 상
          return;
      }
      // 색 변경하기
      image[x][y] = color;
      dfs(x, y+1);
      dfs(x, y-1);
      dfs(x-1, y);
      dfs(x+1, y);
  }
  dfs(sr, sc);

  return image;
};