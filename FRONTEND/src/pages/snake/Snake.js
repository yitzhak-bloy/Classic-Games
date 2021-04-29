import { useState } from "react";

import "./Snake.css";

import DifficultyLevelButtons from "../../components/snake-components/difficultyLevelButtons/DifficultyLevelButtons";
import SnakeBoard from "../../components/snake-components/SnakeBoard/SnakeBoard";
import DirectionButtons from "../../components/snake-components/DirectionButtons/DirectionButtons";

const Snake = () => {
  const [direction, setDirection] = useState("up");
  const [running, setRunning] = useState(false);
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [counter, setCounter] = useState(0);
  const [difficulty, setDifficulty] = useState("medium");

  const handelEasy = () => {
    if (!running) {
      setSnakeSpeed(600);
      setDifficulty("easy");
    }
  };

  const handelMedium = () => {
    if (!running) {
      setSnakeSpeed(200);
      setDifficulty("medium");
    }
  };

  const handelHard = () => {
    if (!running) {
      setSnakeSpeed(50);
      setDifficulty("hard");
    }
  };

  return (
    <div className='snake-div-center'>
      <h2 className='snake-counter'>{counter}</h2>
      <DifficultyLevelButtons
        difficulty={difficulty}
        handelEasy={handelEasy}
        handelMedium={handelMedium}
        handelHard={handelHard}
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
        setDirection={setDirection}
      />
    </div>
  );
};

export default Snake;
