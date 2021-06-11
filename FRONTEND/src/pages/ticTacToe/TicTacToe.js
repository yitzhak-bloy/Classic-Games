import Box from "@material-ui/core/Box";

import TicTacToeBoard from "../../components/ticTacToe-components/ticTacToeBoard/TicTacToeBoard";
import SelectPlayer from "../../components/ticTacToe-components/selectPlayer/SelectPlayer";
import SelectLevel from "../../components/ticTacToe-components/selectLevel/SelectLevel";
import { PlayerProvider } from "../../shared/context/Player-context";
import { DifficultyLevelProvider } from "../../shared/context/DifficultyLevel-context";
import { GameRunningProvider } from "../../shared/context/GameRunning-context";
import { TurnProvider } from "../../shared/context/Turn-context";
import "./TicTacToe.css";
import { Grid } from "@material-ui/core";

const TicTacToe = () => {
  return (
    <GameRunningProvider>
      <PlayerProvider>
        <DifficultyLevelProvider>
          <TurnProvider>
            <Box className='GameBoard' bgcolor='#FFFFFF'>
              <Grid container justify='space-evenly'>
                <Grid item>
                  <SelectLevel />
                </Grid>
                <Grid item>
                  <SelectPlayer />
                </Grid>
              </Grid>
              <TicTacToeBoard />
            </Box>
          </TurnProvider>
        </DifficultyLevelProvider>
      </PlayerProvider>
    </GameRunningProvider>
  );
};

export default TicTacToe;
