import { useState, useEffect, useCallback } from 'react';

import Square from './Square';
import { minimax } from '../Algorithms/minimax';
import { winning } from '../shared/winning';
import './Board.css'

const Board = () => { 
  const [squares, setSquares] = useState(
    ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  );
  const [whoseTurn, setWhoseTurn] = useState("O")
  const [win, setWin] = useState(false);

  const huPlayer = "O";
  const aiPlayer = "X";

  const clickHandler = (SerialNum) => {
    if (whoseTurn === "O") {
      setSquares(squares.map((square, i) => {
        if(i !== SerialNum || square === "X") return square;
        setWhoseTurn("X")
        return huPlayer
      }))
    }
  }

  useEffect(() => {
    if(whoseTurn === "X") {
      const c = minimax(squares, aiPlayer)
      setTimeout(() => {
        setSquares(squares.map((square, i) => {
          if(i != c.index) return square
          return aiPlayer
        }))
      }, 500);
      setWhoseTurn("O")
    }
  }, [whoseTurn, squares])

  useEffect(() => {
    if (winning(squares, 'X') || winning(squares, 'O')) {
      setWin(true);
    }
  }, [squares])


  if (win) {
    return <h1>מזל טוב {whoseTurn === "O"? "X": "O"}</h1>
  }   
  
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