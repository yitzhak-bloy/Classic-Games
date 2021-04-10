import { useState } from "react";

import './Snake.css';

import DifficultyLevelButtons from '../../components/difficultyLevelButtons/DifficultyLevelButtons';
import SnakeBoard from '../../components/SnakeBoard';
import DirectionButtons from '../../components/DirectionButtons/DirectionButtons';

const Snake = () => {
  const [direction, setDirection] = useState('up');
  const [running, setRunning] = useState(false);
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [counter, setCounter] = useState(0);

  return (
    <div className="snake-div-center">
      <h2 className='snake-counter'>{counter}</h2>
      <DifficultyLevelButtons
        running={running}
        snakeSpeed={snakeSpeed}
        setSnakeSpeed={setSnakeSpeed}
      />
      <SnakeBoard
        running={running}
        direction={direction}
        counter={counter}
        setCounter={setCounter}
        snakeSpeed={snakeSpeed}
        setRunning={setRunning}
        setDirection={setDirection}
      />
      <DirectionButtons
        direction={direction}
        setRunning={setRunning}
        setDirection={setDirection} />
    </div>
  )
}

export default Snake