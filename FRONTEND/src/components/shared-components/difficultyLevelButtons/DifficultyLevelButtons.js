import "./DifficultyLevelButtons.css";

import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#2A9D8F",
    },
  },
});

const DifficultyLevelButtons = ({
  difficulty,
  handelEasy,
  handelMedium,
  handelHard,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='DifficultyLevelButtons__buttens'>
        <Button
          onClick={handelEasy}
          className='difficultyLevelButtons-button'
          disableElevation
          variant='outlined'
          size='large'
          color={difficulty === "easy" ? "primary" : "secondary"}
        >
          Easy
        </Button>
        <Button
          onClick={handelMedium}
          className='difficultyLevelButtons-button'
          disableElevation
          variant='outlined'
          size='large'
          color={difficulty === "medium" ? "primary" : "secondary"}
        >
          Medium
        </Button>
        <Button
          onClick={handelHard}
          className='difficultyLevelButtons-button'
          disableElevation
          variant='outlined'
          size='large'
          color={difficulty === "hard" ? "primary" : "secondary"}
        >
          Hard
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default DifficultyLevelButtons;
