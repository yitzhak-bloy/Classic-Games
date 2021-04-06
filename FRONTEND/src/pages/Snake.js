import { useState } from "react";

import SnakeBoard from '../components/SnakeBoard';
import DirectionButtons from '../components/DirectionButtons/DirectionButtons';

const Snake = () => {
  const [direction, setDirection] = useState('up');
  const [running, setRunning] = useState(false);

  const handelRight = () => {
    if (direction !== 'left') {
      setRunning(true);
      setDirection('right')
    }
  }

  const handelLeft = () => {
    if (direction !== 'right') {
      setRunning(true);
      setDirection('left')
    }
  }

  const handelUp = () => {
    if (direction !== 'down') {
      setRunning(true);
      setDirection('up')
    }
  }

  const handelDown = () => {
    if (direction !== 'up') {
      setRunning(true);
      setDirection('down')
    }
  }

  const handelRestart = () => {
    setRunning(false);
    setDirection('up')
  };

  return (
    <div>
      <SnakeBoard running={running} direction={direction} handelRestart={handelRestart} />
      <DirectionButtons handelRight={handelRight} handelLeft={handelLeft} handelUp={handelUp} handelDown={handelDown} />
    </div>
  )
}

export default Snake