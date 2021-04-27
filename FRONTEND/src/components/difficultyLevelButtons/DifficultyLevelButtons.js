import "./DifficultyLevelButtons.css";

import { Button } from "@material-ui/core";

const DifficultyLevelButtons = ({ running, snakeSpeed, setSnakeSpeed }) => {
  const handelEasy = () => !running && setSnakeSpeed(600);
  const handelMedium = () => !running && setSnakeSpeed(200);
  const handelHard = () => !running && setSnakeSpeed(50);

  return (
    <div className='snake-butten'>
      <Button
        onClick={handelEasy}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={snakeSpeed === 600 ? "primary" : "palette.primary.dark"}
      >
        Easy
      </Button>
      <Button
        onClick={handelMedium}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={snakeSpeed === 200 ? "primary" : "palette.primary.dark"}
      >
        Medium
      </Button>
      <Button
        onClick={handelHard}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={snakeSpeed === 50 ? "primary" : "palette.primary.dark"}
      >
        Hard
      </Button>
    </div>
  );
};

export default DifficultyLevelButtons;
