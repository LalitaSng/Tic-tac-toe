
export const getInitialBoard = (gridSize = 3) => {
  const initialBoard = [];
    for(let i=0; i<gridSize; i++){
      const innerArray =[];
      for(let j=0; j<gridSize; j++){
        innerArray.push('');
      }
      initialBoard.push(innerArray);
    }
  return initialBoard;
}
export function getWinner(board, row, col, player) {
  let i,
  stop = false;
  for (i = 0; i < board.length; i++) {
    if (board[row][i] !== player) {
      stop = true;
      break;
    }
  }
  if (stop === false) {
    return player;
  }
  stop = false;
  let j;
  for (j = 0; j < board.length; j++) {
    if (board[j][col] !== player) {
      stop = true;
      break;
    }
  }
  if (stop == false) {
    return player;
  }
  stop = false;
  i = 0;
  j = 0;
  while (i < board.length && j < board.length) {
    if (board[i][j] !== player) {
      stop = true;
      break;
    }
    i++;
    j++;
  }
  if (stop === false) {
    return player;
  }
  stop = false;
  i = 0;
  j = board.length - 1;
  while (i < board.length && j >= 0) {
    if (board[i][j] !== player) {
      stop = true;
      break;
    }
    i++;
    j--;
  }
  if (stop === false) {
    return player;
  }
}
