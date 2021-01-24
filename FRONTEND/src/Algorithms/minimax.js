import { winning } from '../shared/winning';

const huPlayer = "O";
const aiPlayer = "X";

const arrOfEmptyIndexies = (board) => {
  let arr = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== "O" && board[i] !== "X") {
      arr.push(i)
    }
  }
  return arr
}

export const minimax = (newBoard, player, level) => {
  let availSpots = arrOfEmptyIndexies(newBoard);

  if (level === "easy") {
    const random = Math.floor(Math.random() * availSpots.length);
    return { index: availSpots[random] }
  }

  if (winning(newBoard, huPlayer) === "true") {
    return { score: -10 };
  } else if (winning(newBoard, aiPlayer) === "true") {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  let moves = [];

  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player === aiPlayer) {
      let result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;

    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

