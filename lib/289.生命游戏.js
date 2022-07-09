/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
  00 死 -> 死
  10 死 -> 活
  01 活 -> 死
  11 活 -> 活

  死
    活：周围 8 个位置刚好有 3 个活细胞
    死：对上条件取反
  活
    活：周围 8 个位置刚好有 2 或者 3 个活细胞
    死：对上条件取反

  1011 & (1 << 2)
   1   & 
  0

  1011 >> 2 = 10
*/
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  const dirs = [
    [-1, 0], [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1], [-1, -1]
  ];

  const getCount = (x, y) => {
    let cnt = 0;
    for (const [sx, sy] of dirs) {
      const nx = x + sx;
      const ny = y + sy;
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
        continue;
      }
      cnt += (board[nx][ny] & 1);
    }
    return cnt;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = board[i][j];
      const count = getCount(i, j);
      if (curr === 0) {
        if (count === 3) {
          // 死 -> 活 0 => 10
          board[i][j] |= (1 << 1);
        } else {
          // 死 -> 死 0 => 00
        }
      } else {
        if (count === 2 || count === 3) {
          // 活 -> 活 1 => 11
          board[i][j] |= (1 << 1);
        } else {
          // 活 -> 死 1 => 01
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }

  return board;
};




