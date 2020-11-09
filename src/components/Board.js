import { useState, useEffect } from 'react';

import Square from './Square';
import './Board.css'

const Board = () => { 
  const [squares, setSquares] = useState(
    [{0: ''}, {1: ''}, {2: ''}, {3: ''}, {4: ''}, {5: ''}, {6: ''}, {7: ''}, {8: ''}]
  );

  const [whoseTurn, setWhoseTurn] = useState('')
  const [win, setWin] = useState(false);
  const [emptyIndexies, setEmptyIndexies] = useState(squares);

  const clickHandler = (SerialNum) => {
    setSquares(squares.map(square => {
      if(Object.keys(square).[0] !== SerialNum) return square;
      return {...square, [SerialNum]: 'x'}
    }))
  }

  useEffect(() => {
    if (
      (squares[0][0] === 'x' && squares[1][1] === 'x' && squares[2][2] === 'x') ||
      (squares[3][3] === 'x' && squares[4][4] === 'x' && squares[5][5] === 'x') ||
      (squares[6][6] === 'x' && squares[7][7] === 'x' && squares[8][8] === 'x') ||
      (squares[0][0] === 'x' && squares[3][3] === 'x' && squares[6][6] === 'x') ||
      (squares[1][1] === 'x' && squares[4][4] === 'x' && squares[7][7] === 'x') ||
      (squares[2][2] === 'x' && squares[5][5] === 'x' && squares[8][8] === 'x') ||
      (squares[0][0] === 'x' && squares[4][4] === 'x' && squares[8][8] === 'x') ||
      (squares[2][2] === 'x' && squares[4][4] === 'x' && squares[6][6] === 'x')
      ) {
      setWin(true);
      }
  }, [squares])

  useEffect(() => {
    console.log("Board -> square", squares)
    setEmptyIndexies(squares.filter(square =>  square[Object.keys(square)[0]] !== "O" &&  square[Object.keys(square)[0]] !== "x"));
  }, [squares])
  if (win) {
    return <h1>מזל טוב נצחת</h1>
  }   
  
    console.log("Board -> square", squares)
    console.log("Board -> emptyIndexies111", emptyIndexies)


  return (
    <div className='board' >
      <Square state={squares[0]} clickHandler={clickHandler} />
      <Square state={squares[1]} clickHandler={clickHandler}/>
      <Square state={squares[2]} clickHandler={clickHandler}/>
      <Square state={squares[3]} clickHandler={clickHandler}/>
      <Square state={squares[4]} clickHandler={clickHandler}/>
      <Square state={squares[5]} clickHandler={clickHandler}/>
      <Square state={squares[6]} clickHandler={clickHandler}/>
      <Square state={squares[7]} clickHandler={clickHandler}/>
      <Square state={squares[8]} clickHandler={clickHandler}/>
    </div>
  )
};

export default Board;