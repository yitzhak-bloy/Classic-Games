import { useState } from "react";

import SnakeBoard from '../components/SnakeBoard';
import DirectionButtons from '../components/DirectionButtons/DirectionButtons';

const Snake = () => {
  const [direction, setDirection] = useState('up');
  const [running, setRunning] = useState(false);

  return (
    <div>
      <SnakeBoard running={running} direction={direction} setRunning={setRunning} setDirection={setDirection} />
      <DirectionButtons direction={direction} setRunning={setRunning} setDirection={setDirection} />
    </div>
  )
}

export default Snake