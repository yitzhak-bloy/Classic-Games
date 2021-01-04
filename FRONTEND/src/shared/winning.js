const checkIfBoardFull = (board) => {
  let result = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== "X" && board[i] !== "O") {
      result = false;
    }
  }
  return result;
};

export const winning = (board, player) => {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return 'true'
  } else if (checkIfBoardFull(board)) {
    return "full";
  } else {
    return 'false';
  }
};