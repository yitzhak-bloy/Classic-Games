import "./DifficultyLevelButtons.css";

import { Button } from "@material-ui/core";

const DifficultyLevelButtons = ({
  difficulty,
  handelEasy,
  handelMedium,
  handelHard,
}) => {
  return (
    <div className='DifficultyLevelButtons__buttens'>
      <Button
        onClick={handelEasy}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={difficulty === "easy" ? "primary" : "palette.primary.dark"}
      >
        Easy
      </Button>
      <Button
        onClick={handelMedium}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={difficulty === "medium" ? "primary" : "palette.primary.dark"}
      >
        Medium
      </Button>
      <Button
        onClick={handelHard}
        className='difficultyLevelButtons-button'
        disableElevation
        variant='outlined'
        size='large'
        color={difficulty === "hard" ? "primary" : "palette.primary.dark"}
      >
        Hard
      </Button>
    </div>
  );
};

export default DifficultyLevelButtons;
