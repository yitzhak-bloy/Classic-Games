const huPlayer = "O";
const aiPlayer = "X";
var fc = 0;

const winning = (board, player) => {
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
    return true
  } else {
    return false
  }
};

const arrOfEmptyIndexies = (squares) => {
  let arr = []; 
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] != "O" && squares[i] != "X") {
      arr.push(i)
    }    
  }
  return arr
}


// the main minimax function
export const minimax = (newBoard, player) => {
  //add one to function calls
  fc++;
  
  //available spots
  let availSpots = arrOfEmptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)){
    return {score:-10};
  }
  else if (winning(newBoard, aiPlayer)){
    return {score:10};
  }
  else if (availSpots.length === 0){
    return {score:0};
  }

  // an array to collect all the objects
  let moves = [];

  // loop through available spots
  for (let i = 0; i < availSpots.length; i++){
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    let move = {};
    move.index = availSpots[i];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;
    
    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player === aiPlayer){
      let result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else{
      let result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  let bestMove;
  if(player === aiPlayer){
    let bestScore = -10000;
    for(let i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{

    // else loop over the moves and choose the move with the lowest score
    let bestScore = 10000;
    for(var a = 0; a < moves.length; a++){
      if(moves[a].score < bestScore){
        bestScore = moves[a].score;
        bestMove = a;
      }
    }
  }
  // return the chosen move (object) from the array to the higher depth
  return [bestMove];
}
