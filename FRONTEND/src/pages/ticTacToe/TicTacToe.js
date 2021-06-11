import { useState } from "react";
import Box from "@material-ui/core/Box";

import TicTacToeBoard from "../../components/ticTacToe-components/ticTacToeBoard/TicTacToeBoard";
import SelectPlayer from "../../components/ticTacToe-components/selectPlayer/SelectPlayer";
import SelectLevel from "../../components/ticTacToe-components/selectLevel/SelectLevel";
import { UserPlayerProvider } from "../../shared/context/Player-context";
import { DifficultyLevelContext } from "../../shared/context/DifficultyLevel-context";
import { GameRunning } from "../../shared/context/GameRunning-context";
import { TurnContext } from "../../shared/context/Turn-context";
import "./TicTacToe.css";
import { Grid } from "@material-ui/core";

const TicTacToe = () => {
  const [level, setLevel] = useState("hard");
  const [gameRunning, setGameRunning] = useState(false);
  const [whoseTurn, setWhoseTurn] = useState("X");

  return (
    <GameRunning.Provider
      value={{
        gameRunning: gameRunning,
        gameChange: (state) => {
          setGameRunning(state);
        },
      }}
    >
      <UserPlayerProvider>
        <DifficultyLevelContext.Provider
          value={{
            difficultyLevel: level,
            difficultyChange: (level) => {
              setLevel(level === "hard" ? "easy" : "hard");
            },
          }}
        >
          <TurnContext.Provider
            value={{
              whoseTurn: whoseTurn,
              TurnChange: (whose) => {
                setWhoseTurn(whose);
              },
            }}
          >
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
          </TurnContext.Provider>
        </DifficultyLevelContext.Provider>
      </UserPlayerProvider>
    </GameRunning.Provider>
  );
};

export default TicTacToe;
