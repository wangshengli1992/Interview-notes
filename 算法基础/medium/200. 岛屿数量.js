/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围
[
['1','1','0','0','0'],
['1','1','0','0','0'],
['0','0','1','0','0'],
['0','0','0','1','1']
]
输出: 3
 */
var numIslands = function(grid) {
  // 递归转换 1 为 0，因为只处理横竖方向，正好能避过另一个岛
  let tureZero = (i, j, grid) => {
    // 特判
    if (grid[i]===undefined || grid[i][j]===undefined || grid[i][j]==='0') return;
    grid[i][j] = '0'
    tureZero(i-1, j, grid)
    tureZero(i+1, j, grid)
    tureZero(i, j-1, grid)
    tureZero(i, j+1, grid)
  }
  let count = 0
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++
        tureZero(i, j, grid)
      }
    }
  }
  return count
}