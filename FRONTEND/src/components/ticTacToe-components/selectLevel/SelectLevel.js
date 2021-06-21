import { useContext } from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { GameRunningContext } from "../../../shared/context/GameRunning-context";
import { DifficultyLevelContext } from "../../../shared/context/DifficultyLevel-context";

const SelectLevel = () => {
  const difficultyChange = useContext(DifficultyLevelContext).difficultyChange;
  const difficultyLevel = useContext(DifficultyLevelContext).difficultyLevel;
  const gameRun = useContext(GameRunningContext).gameRunning;

  const changeTo = () => {
    if (!gameRun) {
      difficultyChange(difficultyLevel);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#264653",
      },
    },
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box component='div' p={1} m={1} mt={5}>
          <Button
            onClick={changeTo}
            variant='contained'
            disableElevation
            variant='outlined'
            size='large'
            color='primary'
          >
            {difficultyLevel}
          </Button>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default SelectLevel;
