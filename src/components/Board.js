import { useState, useEffect, useCallback } from 'react';

import Square from './Square';
import './Board.css'

const Board = () => { 
  const [squares, setSquares] = useState(
    ['', '', 'X', 'X','', 'X', 'X', 'O', 'O']
  );
  const [whoseTurn, setWhoseTurn] = useState("O")
  const [win, setWin] = useState(false);
  const [emptyIndexies, setEmptyIndexies] = useState(squares);

  const huPlayer = "O";
  const aiPlayer = "X";
  var fc = 0;

  const clickHandler = (SerialNum) => {
    if (whoseTurn === "O") {
      setSquares(squares.map((square, i) => {
        if(i !== SerialNum) return square;
        return huPlayer
      }))
      setWhoseTurn("X")
    }
  }

  const arrOfEmptyIndexies = (squares) => {
    let arr = []; 
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] != "O" && squares[i] != "X") {
        arr.push(i)
      }    
    }
    return arr
  }

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





  // the main minimax function
  const minimax = (newBoard, player) => {
    //add one to function calls
    fc++;
    
    //available spots
    var availSpots = arrOfEmptyIndexies(newBoard);

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

  useEffect(() => {
    if(whoseTurn === "X") {
      const c = minimax(squares, aiPlayer)
      setSquares(squares.map((square, i) => {
        if(i !== c[0]) return square;
        return aiPlayer
      }))
      setWhoseTurn("O")
    }
  }, [whoseTurn])




  // useEffect(() => {
  //   if (winning(squares, 'X') || winning(squares, 'O')) {
  //     setWin(true);
  //   }
  // }, [squares])

  // useEffect(() => {
  //   setEmptyIndexies(arrOfEmptyIndexies(squares));
  // }, [squares]);

  // if (win) {
  //   return <h1>מזל טוב נצחת</h1>
  // }   
  


  return (
    <div className='board' >
      <Square state={squares[0]} keys={0} clickHandler={clickHandler} />
      <Square state={squares[1]} keys={1} clickHandler={clickHandler}/>
      <Square state={squares[2]} keys={2} clickHandler={clickHandler}/>
      <Square state={squares[3]} keys={3} clickHandler={clickHandler}/>
      <Square state={squares[4]} keys={4} clickHandler={clickHandler}/>
      <Square state={squares[5]} keys={5} clickHandler={clickHandler}/>
      <Square state={squares[6]} keys={6} clickHandler={clickHandler}/>
      <Square state={squares[7]} keys={7} clickHandler={clickHandler}/>
      <Square state={squares[8]} keys={8} clickHandler={clickHandler}/>
    </div>
  )
};

export default Board;