import { useState, useEffect, useContext } from 'react';

import Square from './Square';
import { minimax } from '../Algorithms/minimax';
import { winning } from '../shared/winning';
import { PlayerContext } from '../shared/context/Player-context';
import { DifficultyLevelContext } from '../shared/context/DifficultyLevel-context';
import './Board.css'

const Board = () => { 
  const [squares, setSquares] = useState(
    ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  );
  const [whoseTurn, setWhoseTurn] = useState("X")
  const [win, setWin] = useState(false);

  const huPlayer = useContext(PlayerContext).huPlayer;
  const aiPlayer = useContext(PlayerContext).aiPlayer;

  const difficultyLevel = useContext(DifficultyLevelContext).difficultyLevel;

  const clickHandler = (SerialNum) => {
    if (whoseTurn === huPlayer) {
      setSquares(squares.map((square, i) => {
        if(i !== SerialNum || square === aiPlayer) return square;
        setWhoseTurn(aiPlayer)
        return huPlayer
      }))
    }
  }

  useEffect(() => {
    if (whoseTurn === aiPlayer) {
      const bestMove = minimax(squares, aiPlayer, difficultyLevel)
      setTimeout(() => {
        setSquares(squares.map((square, i) => {
          if(i != bestMove.index) return square
          return aiPlayer
        }))
      }, 500);
      setWhoseTurn(huPlayer)
    }
  }, [whoseTurn, squares])

  useEffect(() => {
    if (winning(squares, 'X') || winning(squares, 'O')) {
      setWin(true);
    }
  }, [squares])

  if (win) {
    console.log("Board -> whoseTurn", whoseTurn)
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