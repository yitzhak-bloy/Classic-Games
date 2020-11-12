import { useState, useEffect, useCallback } from 'react';

import Square from './Square';
import { minimax } from '../Algorithms/minimax';
import './Board.css'

const Board = () => { 
  const [squares, setSquares] = useState(
    ['', '', 'X', 'X','', 'X', 'X', 'O', 'O']
  );
  const [whoseTurn, setWhoseTurn] = useState("O")
  const [win, setWin] = useState(false);

  const huPlayer = "O";
  const aiPlayer = "X";

  const clickHandler = (SerialNum) => {
    if (whoseTurn === "O") {
      setSquares(squares.map((square, i) => {
        if(i !== SerialNum) return square;
        return huPlayer
      }))
      setWhoseTurn("X")
    }
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


  useEffect(() => {
    if(whoseTurn === "X") {
      const c = minimax(squares, aiPlayer)
      setSquares(squares.map((square, i) => {
        if(i !== c[0]) return square;
        return aiPlayer
      }))
      setWhoseTurn("O")
    }
  }, [whoseTurn, squares])




  // useEffect(() => {
  //   if (winning(squares, 'X') || winning(squares, 'O')) {
  //     setWin(true);
  //   }
  // }, [squares])


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