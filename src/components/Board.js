import { useState } from 'react';

import Square from './Square';
import './Board.css'

const Board = () => { 
  const [square0, setSquare0] = useState([0, '']);
  const [square1, setSquare1] = useState([1, '']);
  const [square2, setSquare2] = useState([2, '']);
  const [square3, setSquare3] = useState([3, '']);
  const [square4, setSquare4] = useState([4, '']);
  const [square5, setSquare5] = useState([5, '']);
  const [square6, setSquare6] = useState([6, '']);
  const [square7, setSquare7] = useState([7, '']);
  const [square8, setSquare8] = useState([8, '']);

  const clickHandler = (SerialNum) => {
    switch (SerialNum) {
      case 0:
        setSquare0([0, 'x'])
      break;
      case 1:
        setSquare1([1, 'x'])
      break;        
      case 2:
        setSquare2([2, 'x'])
      break;        
      case 3:
        setSquare3([3, 'x'])
      break;
      case 4:
        setSquare4([4, 'x'])
      break;
      case 5:
        setSquare5([5, 'x'])
      break;
      case 6:
        setSquare6([6, 'x'])
      break;
      case 7:
        setSquare7([7, 'x'])
      break;
      case 8:
        setSquare8([8, 'x'])
      break;                                                 
      default:
    }
  }

  return (
    <div className='board' >
      <Square state={square0} clickHandler={clickHandler} />
      <Square state={square1} clickHandler={clickHandler}/>
      <Square state={square2} clickHandler={clickHandler}/>
      <Square state={square3} clickHandler={clickHandler}/>
      <Square state={square4} clickHandler={clickHandler}/>
      <Square state={square5} clickHandler={clickHandler}/>
      <Square state={square6} clickHandler={clickHandler}/>
      <Square state={square7} clickHandler={clickHandler}/>
      <Square state={square8} clickHandler={clickHandler}/>
    </div>
  )
};

export default Board;